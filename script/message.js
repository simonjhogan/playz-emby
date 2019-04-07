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

var message = new MESSAGE();

function MESSAGE() {
	this.id = "message";
	this.success = 1;
	this.error = 2;
	this.notice = 3;
	this.interval;
};

MESSAGE.prototype.visible = function() {
	if (dom.querySelector("#" + this.id)) {
		return true;
	}
	return false;
};

MESSAGE.prototype.remove = function() {
	if (this.interval) {
		window.clearTimeout(this.interval);
	}
	dom.hide("#" + this.id);
	dom.hide("#" + this.id + "Overlay");			
	dom.remove("#" + this.id);
	dom.remove("#" + this.id + "Overlay");	
};

MESSAGE.prototype.show = function(settings) {
	var self = this;
	var className;
	var duration = settings.duration || 3000;
	var persist = settings.persist || false;

	this.remove();
	
	switch(settings.messageType) {
		case this.success:		
				className = "message-success";
			break;
		
		case this.error:
				className = "message-error";	
			break;
			
		case this.notice:
				className = "message-notice";	
			break;			
	}

	dom.append("body", {
		nodeName: "div",
		className: "message-overlay",
		id: this.id + "Overlay"
	});
		
	dom.append("body", {
		nodeName: "div",
		className: "message " + className,
		id: this.id,
		text: settings.text	
	});
	
	if (!persist) {	
		this.interval = window.setTimeout(function() {
			dom.hide("#" + self.id);
			dom.hide("#" + self.id + "Overlay");			
			dom.remove("#" + self.id);
			dom.remove("#" + self.id + "Overlay");			
		}, duration);

	}
};
