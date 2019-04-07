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

var device = new DEVICE();

function DEVICE() {
	this.client = "PLAYz EMBY";
	this.name = "LG Smart TV";
	this.id = storage.exists("emby.device.id") ? storage.get("emby.device.id") : storage.set("emby.device.id", guid.create());
	this.version = "0.0.0.1";
	this.author = "Sith'ari Consulting",			
	this.language = navigator.language;
	this.platform = navigator.platform;
	this.appCodeName = navigator.appCodeName;
	this.appVersion = navigator.appVersion;	
	this.product = navigator.product;
	this.view = {
		height: window.innerHeight,
		width: window.innerWidth
	};
	this.timeout = 6000;
	
	this.bodyClass = window.innerHeight > 720 ? "view-1080" : "view-720";
	this.columnWidth = window.innerHeight > 720 ? 258 : 143;
	this.columnWidthSquare =  window.innerHeight > 720 ? 376 : 209;	
};
