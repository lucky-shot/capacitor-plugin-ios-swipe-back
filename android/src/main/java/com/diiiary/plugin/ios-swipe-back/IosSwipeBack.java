package com.diiiary.plugin.iosswipeback;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "IosSwipeBack")
public class IosSwipeBack extends Plugin {

    @PluginMethod()
    public void enable(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("error", 0);
        call.success(ret);
    }

    @PluginMethod()
    public void disable(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("error", 0);
        call.success(ret);
    }
}