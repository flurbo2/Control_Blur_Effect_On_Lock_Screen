const { Gio, GLib, Shell, St } = imports.gi;
const Main = imports.ui.main;
const Background = imports.ui.background;
const ExtensionUtils = imports.misc.extensionUtils;

const BRIGHTNESS_KEY = 'brightness';
const SIGMA_KEY = 'sigma';

let ORIGINAL = imports.ui.unlockDialog.UnlockDialog.prototype._createBackground;

function _controlBlur(monitorIndex) {

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

        let effect = new Shell.BlurEffect({
            brightness: ExtensionUtils.getSettings().get_string(BRIGHTNESS_KEY),
            sigma: ExtensionUtils.getSettings().get_string(SIGMA_KEY) * themeContext.scale_factor,
        });

        this._scaleChangedId = themeContext.connect('notify::scale-factor', () => {
            effect.sigma = ExtensionUtils.getSettings().get_string(SIGMA_KEY) * themeContext.scale_factor;
        });

        widget.add_effect(effect);
    }

function init() {}

function enable() {
imports.ui.unlockDialog.UnlockDialog.prototype._createBackground = _controlBlur;
}


function disable() {
imports.ui.unlockDialog.UnlockDialog.prototype._createBackground = ORIGINAL;
}
