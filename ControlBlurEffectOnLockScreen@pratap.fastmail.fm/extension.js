const { Gio, GLib, Shell, St } = imports.gi;
const Main = imports.ui.main;
const Background = imports.ui.background;
const ExtensionUtils = imports.misc.extensionUtils;

const BLUR_SCHEMA = 'org.gnome.shell.extensions.blur';

let ORIGINAL = imports.ui.unlockDialog.UnlockDialog.prototype._createBackground;

class Blur {
	constructor() {
}

	enable() {
	imports.ui.unlockDialog.UnlockDialog.prototype._createBackground = this._controlBlur;
}

	disable() {
	imports.ui.unlockDialog.UnlockDialog.prototype._createBackground = ORIGINAL;
}

	_controlBlur(monitorIndex) {
	
        let monitor = Main.layoutManager.monitors[monitorIndex];
        let widget = new St.Widget({
            style_class: 'screen-shield-background',
            x: monitor.x,
            y: monitor.y,
            width: monitor.width,
            height: monitor.height,
        });

        let bgManager = new Background.BackgroundManager({
            container: widget,
            monitorIndex,
            controlPosition: false,
        });

        this._bgManagers.push(bgManager);

        this._backgroundGroup.add_child(widget);

        const themeContext = St.ThemeContext.get_for_stage(global.stage);
        
	let BRIGHTNESS_VALUE = ExtensionUtils.getSettings(BLUR_SCHEMA).get_double('brightness');
	let SIGMA_VALUE = ExtensionUtils.getSettings(BLUR_SCHEMA).get_int('sigma');
        
        let effect = new Shell.BlurEffect({ brightness: BRIGHTNESS_VALUE , sigma: SIGMA_VALUE * themeContext.scale_factor, });

        this._scaleChangedId = themeContext.connect('notify::scale-factor', () => { effect.sigma = SIGMA_VALUE * themeContext.scale_factor; });

        widget.add_effect(effect); }
}

function init() { return new Blur(); }


