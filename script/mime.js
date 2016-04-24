var mime = new MIME();

MIME.prototype.lookup = function(code) {
	var lookupCode = code.charAt(0) == "." ? code : "." + code;
	return this.mimeTypes[lookupCode];
};
	
function MIME() {
	this.mimeTypes = {};
	
	this.mimeTypes['.3g2'] = 'video/3gpp2';
	this.mimeTypes['.3gp'] = 'video/3gpp';
	this.mimeTypes['.aac'] = 'audio/x-aac';
	this.mimeTypes['.adp'] = 'audio/adpcm';
	this.mimeTypes['.aif'] = 'audio/x-aiff';
	this.mimeTypes['.asf'] = 'video/x-ms-asf';
	this.mimeTypes['.au'] = 'audio/basic';
	this.mimeTypes['.avi'] = 'video/x-msvideo';
	this.mimeTypes['.bmp'] = 'image/bmp';
	this.mimeTypes['.btif'] = 'image/prs.btif';
	this.mimeTypes['.cgm'] = 'image/cgm';
	this.mimeTypes['.cmx'] = 'image/x-cmx';
	this.mimeTypes['.djvu'] = 'image/vnd.djvu';
	this.mimeTypes['.dra'] = 'audio/vnd.dra';
	this.mimeTypes['.dts'] = 'audio/vnd.dts';
	this.mimeTypes['.dtshd'] = 'audio/vnd.dts.hd';
	this.mimeTypes['.dwg'] = 'image/vnd.dwg';
	this.mimeTypes['.dxf'] = 'image/vnd.dxf';
	this.mimeTypes['.ecelp4800'] = 'audio/vnd.nuera.ecelp4800';
	this.mimeTypes['.ecelp7470'] = 'audio/vnd.nuera.ecelp7470';
	this.mimeTypes['.ecelp9600'] = 'audio/vnd.nuera.ecelp9600';
	this.mimeTypes['.eol'] = 'audio/vnd.digital-winds';
	this.mimeTypes['.f4v'] = 'video/x-f4v';
	this.mimeTypes['.fbs'] = 'image/vnd.fastbidsheet';
	this.mimeTypes['.fh'] = 'image/x-freehand';
	this.mimeTypes['.fli'] = 'video/x-fli';
	this.mimeTypes['.flv'] = 'video/x-flv';
	this.mimeTypes['.fpx'] = 'image/vnd.fpx';
	this.mimeTypes['.fst'] = 'image/vnd.fst';
	this.mimeTypes['.fvt'] = 'video/vnd.fvt';
	this.mimeTypes['.g3'] = 'image/g3fax';
	this.mimeTypes['.gif'] = 'image/gif';
	this.mimeTypes['.h261'] = 'video/h261';
	this.mimeTypes['.h263'] = 'video/h263';
	this.mimeTypes['.h264'] = 'video/h264';
	this.mimeTypes['.html'] = 'text/html';
	this.mimeTypes['.ico'] = 'image/x-icon';
	this.mimeTypes['.ief'] = 'image/ief';
	this.mimeTypes['.jpeg'] = 'image/jpeg';
	this.mimeTypes['.jpg'] = 'image/jpeg';
	this.mimeTypes['.jpgv'] = 'video/jpeg';
	this.mimeTypes['.jpm'] = 'video/jpm';
	this.mimeTypes['.lvp'] = 'audio/vnd.lucent.voice';
	this.mimeTypes['.m3u'] = 'audio/x-mpegurl';
	this.mimeTypes['.m3u8'] = 'application/vnd.apple.mpegurl';
	this.mimeTypes['.m4v'] = 'video/x-m4v';
	this.mimeTypes['.mdi'] = 'image/vnd.ms-modi';
	this.mimeTypes['.mid'] = 'audio/midi';
	this.mimeTypes['.mj2'] = 'video/mj2';
	this.mimeTypes['.mmr'] = 'image/vnd.fujixerox.edmics-mmr';
	this.mimeTypes['.movie'] = 'video/x-sgi-movie';
	this.mimeTypes['.mp4'] = 'video/mp4';
	this.mimeTypes['.mp4a'] = 'audio/mp4';
	this.mimeTypes['.mpeg'] = 'video/mpeg';
	this.mimeTypes['.mpga'] = 'audio/mpeg';
	this.mimeTypes['.mxu'] = 'video/vnd.mpegurl';
	this.mimeTypes['.npx'] = 'image/vnd.net-fpx';
	this.mimeTypes['.oga'] = 'audio/ogg';
	this.mimeTypes['.ogv'] = 'video/ogg';
	this.mimeTypes['.pbm'] = 'image/x-portable-bitmap';
	this.mimeTypes['.pcx'] = 'image/x-pcx';
	this.mimeTypes['.pdf'] = 'application/pdf';
	this.mimeTypes['.pgm'] = 'image/x-portable-graymap';
	this.mimeTypes['.pic'] = 'image/x-pict';
	this.mimeTypes['.png'] = 'image/png';
	this.mimeTypes['.pnm'] = 'image/x-portable-anymap';
	this.mimeTypes['.ppm'] = 'image/x-portable-pixmap';
	this.mimeTypes['.psd'] = 'image/vnd.adobe.photoshop';
	this.mimeTypes['.pya'] = 'audio/vnd.ms-playready.media.pya';
	this.mimeTypes['.pyv'] = 'video/vnd.ms-playready.media.pyv';
	this.mimeTypes['.qt'] = 'video/quicktime';
	this.mimeTypes['.ram'] = 'audio/x-pn-realaudio';
	this.mimeTypes['.ras'] = 'image/x-cmu-raster';
	this.mimeTypes['.rgb'] = 'image/x-rgb';
	this.mimeTypes['.rip'] = 'audio/vnd.rip';
	this.mimeTypes['.rlc'] = 'image/vnd.fujixerox.edmics-rlc';
	this.mimeTypes['.rmp'] = 'audio/x-pn-realaudio-plugin';
	this.mimeTypes['.sub'] = 'image/vnd.dvb.subtitle';
	this.mimeTypes['.svg'] = 'image/svg+xml';
	this.mimeTypes['.swf'] = 'application/x-shockwave-flash';
	this.mimeTypes['.tiff'] = 'image/tiff';
	this.mimeTypes['.uva'] = 'audio/vnd.dece.audio';
	this.mimeTypes['.uvh'] = 'video/vnd.dece.hd';
	this.mimeTypes['.uvi'] = 'image/vnd.dece.graphic';
	this.mimeTypes['.uvm'] = 'video/vnd.dece.mobile';
	this.mimeTypes['.uvp'] = 'video/vnd.dece.pd';
	this.mimeTypes['.uvs'] = 'video/vnd.dece.sd';
	this.mimeTypes['.uvu'] = 'video/vnd.uvvu.mp4';
	this.mimeTypes['.uvv'] = 'video/vnd.dece.video';
	this.mimeTypes['.viv'] = 'video/vnd.vivo';
	this.mimeTypes['.wav'] = 'audio/x-wav';
	this.mimeTypes['.wax'] = 'audio/x-ms-wax';
	this.mimeTypes['.wbmp'] = 'image/vnd.wap.wbmp';
	this.mimeTypes['.weba'] = 'audio/webm';
	this.mimeTypes['.webm'] = 'video/webm';
	this.mimeTypes['.webp'] = 'image/webp';
	this.mimeTypes['.wm'] = 'video/x-ms-wm';
	this.mimeTypes['.wma'] = 'audio/x-ms-wma';
	this.mimeTypes['.wmv'] = 'video/x-ms-wmv';
	this.mimeTypes['.wmx'] = 'video/x-ms-wmx';
	this.mimeTypes['.wvx'] = 'video/x-ms-wvx';
	this.mimeTypes['.xbm'] = 'image/x-xbitmap';
	this.mimeTypes['.xif'] = 'image/vnd.xiff';
	this.mimeTypes['.xpm'] = 'image/x-xpixmap';
	this.mimeTypes['.xwd'] = 'image/x-xwindowdump';
};