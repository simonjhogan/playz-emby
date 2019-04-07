/* 
   Copyright 2019 Simon J. Hogan
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at
       http://www.apache.org/licenses/LICENSE-2.0
   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

var emby = new EMBY();

function EMBY() {
	this.limit = 20;
	this.settings = {};
	this.socket;
};

EMBY.prototype.getPublicUsers = function(settings) {
	settings = settings || {};
	self = this;
	
	ajax.request(settings.server + "/users/public" , {
		method: "GET",
		headers: this.headers(),	
		timeout: device.timout,		 
		success: function(data) {
			settings.success(data);
		},
		error: settings.error
	});		
};

EMBY.prototype.authenticate = function(settings) {
	settings = settings || {};
	self = this;
	
	ajax.request(settings.server + "/Users/" + settings.credentials.userId + "/authenticate" , {
		method: "POST",
		headers: this.headers(),			
		data: {
				password: CryptoJS.SHA1(settings.credentials.password).toString()
		}, 
		success: function(data) {
			data.ServerUrl = settings.server; 
			self.settings = data;
			settings.success(data);
		},
		error: settings.error
	});		
};

EMBY.prototype.authenticateByName = function(settings) {
	settings = settings || {};
	self = this;
	
	ajax.request(settings.server + "/users/authenticatebyname" , {
		method: "POST",
		headers: this.headers(),			
		data: {
				Username: settings.credentials.username,
				password: CryptoJS.SHA1(settings.credentials.password).toString()
		}, 
		success: function(data) {
			data.ServerUrl = settings.server; 
			self.settings = data;
			settings.success(data);
		},
		error: settings.error
	});		
};

EMBY.prototype.getSystemInformation = function(settings) {
	settings = settings || {};

	ajax.request(this.settings.ServerUrl + "/system/info" , {
		method: "GET",
		headers: this.headers(), 
		success: function(data) {
			settings.success(data);
		},
		error: settings.error
	});			
};

EMBY.prototype.getUser = function(settings) {
	settings = settings || {};
	var userId = settings.userId || this.settings.User.Id;
	
	ajax.request(this.settings.ServerUrl + "/users/" + userId, {
		method: "GET",
		headers: this.headers(), 
		success: function(data) {
			settings.success(data);
		},
		error: settings.error
	});			
};

EMBY.prototype.getUserViews = function(settings) {
	settings = settings || {};
	
	ajax.request(this.settings.ServerUrl + "/users/" + this.settings.User.Id + "/views", {
		method: "GET",
		headers: this.headers(), 
		success: function(data) {
			settings.success(data);
		},
		error: settings.error
	});			
};

EMBY.prototype.getUserLastestItems = function(settings) {
	settings = settings || {};
	
	var d = {};
	var includeItemTypes = settings.includeItemTypes || "";
	var parentId = settings.parentId;
	var parentName = settings.parentName || "";		
	var parent = settings.parent || {};
	var label = settings.label || "";		
	var fields = settings.fields || "sortname";
	var limit = settings.limit || this.limit;
	var imageTypeLimit = settings.imageTypeLimit || 1;
	var enableImageTypes = settings.enableImageTypes || "";
	
	ajax.request(this.settings.ServerUrl + "/users/" + this.settings.User.Id  + "/items/latest?" + 
		(includeItemTypes ? "includeItemTypes=" + includeItemTypes : "") + 
		(limit ? "&limit=" + limit : "") + 
		(fields ? "&fields=" + fields : "") + 
		(parentId ? "&parentId=" + parentId : "") + 
		(imageTypeLimit ? "&imageTypeLimit=" + imageTypeLimit : "") + 
		(enableImageTypes ? "&enableImageTypes=" + enableImageTypes : "") + 
		"&AddPlayedIndicator=true", {
		method: "GET",
		headers: this.headers(), 
		success: function(data) {
			d.Items = data;
			d.parentId = parentId;
			d.parentName = parentName;			
			d.parent = parent;
			d.limit = limit;
			d.label = label;				
			settings.success(d);
		},
		error: settings.error
	});			
};

EMBY.prototype.getUserItems = function(settings) {
	settings = settings || {};
	
	var includeItemTypes = settings.includeItemTypes || "";
	var mediaTypes = settings.mediaTypes || "";	
	var parentId = settings.parentId || "";
	var parentName = settings.parentName || "";	
	var parent = settings.parent || {};	
	var label = settings.label || "";		
	var fields = settings.fields || "sortname";
	var startIndex = settings.startIndex || 0;
	var limit = settings.limit || this.limit;
	var imageTypeLimit = settings.imageTypeLimit || 1;
	var enableImageTypes = settings.enableImageTypes || "";
	var recursive = settings.recursive || true;
	var sortBy = settings.sortBy || "sortname";
	var sortOrder = settings.sortOrder || "ascending";
	var filters = settings.filters || "";
	var locationTypes = settings.locationTypes || "filesystem";
	var nameStartsWithOrGreater = settings.nameStartsWithOrGreater || "";
	var forceThumb = settings.forceThumb || false;
	var	genres = settings.genres || "";
	var artistIds = settings.artistIds || "";
				
	ajax.request(this.settings.ServerUrl + "/users/" + this.settings.User.Id  + "/items?" + 
		(sortBy ? "sortBy=" + sortBy : "") + 
		(sortOrder ? "&sortOrder=" + sortOrder : "") +
		(filters ? "&filters=" + filters : "") + 
		(recursive ? "&recursive=" + recursive : "") + 
		(mediaTypes ? "&mediaTypes=" + mediaTypes : "") + 
		(includeItemTypes ? "&includeItemTypes=" + includeItemTypes : "") + 
		(startIndex ? "&startIndex=" + startIndex : "") + 
		(limit ? "&limit=" + limit : "") + 
		(fields ? "&fields=" + fields : "") + 
		(parentId ? "&parentId=" + parentId : "") + 
		(imageTypeLimit ? "&imageTypeLimit=" + imageTypeLimit : "") + 
		(enableImageTypes ? "&enableImageTypes=" + enableImageTypes : "") + 
		(locationTypes ? "&locationTypes=" + locationTypes : "") + 
		(genres ? "&genres=" + genres : "") + 
		(artistIds ? "&artistIds=" + artistIds : "") + 
		(nameStartsWithOrGreater ? "&nameStartsWithOrGreater=" + nameStartsWithOrGreater : "") , {
		method: "GET",
		headers: this.headers(), 
		success: function(data) {
			data.parentId = parentId;
			data.parentName = parentName;
			data.parent = parent;
			data.limit = limit;	
			data.label = label;
			data.startIndex = startIndex;
			data.forceThumb = forceThumb;		
			settings.success(data);
		},
		error: settings.error
	});			
};

EMBY.prototype.getUserItem = function(settings) {
	settings = settings || {};
	
	ajax.request(this.settings.ServerUrl + "/users/" + this.settings.User.Id  + "/items/" + settings.id, {
		method: "GET",
		headers: this.headers(), 
		success: function(data) {
			settings.success(data);
		},
		error: settings.error
	});			
};

EMBY.prototype.getShowsSeasons = function(settings) {
	settings = settings || {};
	
	var fields = settings.fields || "sortname";
				
	ajax.request(this.settings.ServerUrl + "/shows/" + settings.id  + "/seasons?" + 
		"&userId=" + this.settings.User.Id +
		(fields ? "&fields=" + fields : ""), {
		method: "GET",
		headers: this.headers(), 
		success: function(data) {		
			settings.success(data);
		},
		error: settings.error
	});			
};

EMBY.prototype.getShowsEpisodes = function(settings) {
	settings = settings || {};
	
	var fields = settings.fields || "sortname";
				
	ajax.request(this.settings.ServerUrl + "/shows/" + settings.id  + "/episodes?" + 
		"seasonId=" + settings.seasonId +
		"&userId=" + this.settings.User.Id +
		(fields ? "&fields=" + fields : ""), {
		method: "GET",
		headers: this.headers(), 
		success: function(data) {		
			settings.success(data);
		},
		error: settings.error
	});			
};

EMBY.prototype.getVideoStreamUrl = function(settings) {
	settings = settings || {};
		
	var itemId = settings.itemId;
	var direct = settings.direct || "true";
	var extension = settings.extension || "";
	extension = extension.length > 0 ? "." + extension : extension;
			
	return this.settings.ServerUrl + "/Videos/" + itemId + "/stream" + extension + "?static=" + direct + "&mediaSourceId=" + itemId + "&api_key=" + this.settings.AccessToken;
};

EMBY.prototype.getVideoHlsStreamUrl = function(settings) {
	settings = settings || {};
		
	var itemId = settings.itemId;
	var deviceId = settings.deviceId || this.settings.SessionInfo.DeviceId;
	var videoCodec = settings.videoCodec || "h264";
	var audioCodec = settings.audioCodec || "aac";
	var audioStreamIndex = settings.audioStreamIndex || 1;
	var videoBitrate = settings.videoBitrate || 1372000;
	var audioBitrate = settings.audioBitrate || 128000;
	var maxAudioChannels = settings.maxAudioChannels || 2;
	var maxHeight = settings.maxHeight || 720;
	var level = settings.level || 41;
	var clientTime = settings.clientTime || "";
	var profile = settings.profile || "high";
	var playSessionId = settings.playSessionId || "1c7fddb7712646f9ba6352f8d9afc79e";
														
	return this.settings.ServerUrl + "/videos/" + itemId + "/master.m3u8?deviceId=" + deviceId + "&mediaSourceId=" + itemId +
		"&videoCodec=" + videoCodec + "&audioCodec=" + audioCodec + "&audioStreamIndex=" + audioStreamIndex + "&videoBitrate=" + videoBitrate + 
		"&audioBitrate=" + audioBitrate + "&maxAudioChannels=" + maxAudioChannels + "&maxHeight=" + maxHeight + "&level=" + level +
		"&clientTime=" + clientTime + "&profile=" + profile + "&playSessionId=" + playSessionId + "&api_key=" + this.settings.AccessToken;
};

EMBY.prototype.getImageUrl = function(settings) {
	settings = settings || {};
	
	var item = settings.itemId;
	var tag = settings.tag;
	var imageType = settings.imageType || "Primary";
	var height = settings.height || "";
	var width = settings.width || "";	
	var enableImageEnhancers = settings.enableImageEnhancers || true;	
	var quality = settings.quality || 90;	
	var percentPlayed = settings.percentPlayed || "";
	var addPlayedIndicator = settings.addPlayedIndicator || false;
	
	return this.settings.ServerUrl + "/items/" + item + "/images/" + imageType + "?height=" + height + "&width=" + width + "&tag=" + tag + "&enableImageEnhancers=" + enableImageEnhancers + "&quality=" + quality + "&percentPlayed=" + percentPlayed + "&addPlayedIndicator=" + addPlayedIndicator;
};
	
EMBY.prototype.getUserImageUrl = function(settings) {
	settings = settings || {};
	
	var userId = settings.userId;
	var tag = settings.tag;
	var imageType = settings.imageType || "Primary";
	var height = settings.height || "";
	var width = settings.width || "";	
	var enableImageEnhancers = settings.enableImageEnhancers || true;	
	var quality = settings.quality || 90;	
	
	return this.settings.ServerUrl + "/users/" + userId + "/images/" + imageType + "?height=" + height + "&width=" + width + "&tag=" + tag + "&enableImageEnhancers=" + enableImageEnhancers + "&quality=" + quality;
};	
	
	
EMBY.prototype.headers = function() {	
	var headers = {};
	
	headers['Content-Type'] = 'application/json';
	headers['Accept'] = 'application/json, text/javascript, */*; q=0.01';
	headers['Authorization'] = 'MediaBrowser Client="' + device.client + '", Device="' + device.name + 
		'", DeviceId="' + device.id + '", Version="' + device.version + '"';
	
	if (this.settings.User) {
		headers['Authorization'] += ', UserId="' + this.settings.User.Id + '"';
	}
	
	if (this.settings.AccessToken) {
		headers['X-MediaBrowser-Token'] = this.settings.AccessToken;
	}
	
	return headers;			
};

EMBY.prototype.postSessionPlayingStarted = function(settings) {
	settings = settings || {};

	ajax.request(this.settings.ServerUrl + "/sessions/playing" , {
		method: "POST",
		headers: this.headers(), 
		data: settings.data
	});			
};

EMBY.prototype.postSessionPlayingProgress = function(settings) {
	settings = settings || {};

	ajax.request(this.settings.ServerUrl + "/sessions/playing/progress" , {
		method: "POST",
		headers: this.headers(), 
		data: settings.data
	});			
};

EMBY.prototype.postSessionPlayingStopped = function(settings) {
	settings = settings || {};

	ajax.request(this.settings.ServerUrl + "/sessions/playing/stopped" , {
		method: "POST",
		headers: this.headers(), 
		data: settings.data
	});			
};

EMBY.prototype.socketOpen = function(settings) {
	var server = "ws" + this.settings.ServerUrl.substr(4); 	
	var apiKey = this.settings.AccessToken;
	this.socket = new WebSocket(server + "?api_key=" + apiKey + "&deviceId=" + device.id);	
};

EMBY.prototype.socketClose = function() {
	this.socket.close();
	this.socket = null;
};

EMBY.prototype.socketSend = function(data) {
	this.socket.send(data);	
};
