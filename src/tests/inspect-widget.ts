import { WidgetComponentsInterface } from "../widgets-and-windows/widget";

function assertWidgetCore(target: new () => WidgetComponentsInterface): [boolean, string] {
    const widget = new target();
    widget.windowView.contains(widget.windowHeaderView) && widget.windowView.contains(widget.windowContentView)
    return [true, '']
};