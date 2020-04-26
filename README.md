# Control_Blur_Effect_On_Lock_Screen
Control the Blur Effect on Lock Screen which is newly introduced in GNOME 3.36

with the introduction of new lock screen in GNOME 3.36, the background is blurred.
with this extension you can control the blur effect.

for getting the extension click this link https://extensions.gnome.org/extension/2935/control-blur-effect-on-lock-screen/

you must compile the schemas to control the blur effect. To do so,
1. copy the file `org.gnome.shell.extensions.blur.gschema.xml` which is inside schemas directory to `$HOME/.local/share/glib-2.0/schemas/` Create the Directorys as Necessary.
2. and run the command `glib-compile-schemas ./` from the directory `$HOME/.local/share/glib-2.0/schemas/`

````
$ gsettings list-recursively | grep blur
org.gnome.shell.extensions.blur brightness 0.55000000000000004
org.gnome.shell.extensions.blur sigma 1
````

![dconf-editor](https://i.stack.imgur.com/k9lSw.png)

![lock screen](https://i.stack.imgur.com/XCB8h.jpg)

![directory structure](https://i.stack.imgur.com/y1is6.png)

Extension Icon Used in gnome-extensions.org site is the credit of https://materialdesignicons.com/ (https://github.com/google/material-design-icons/blob/master/LICENSE).
