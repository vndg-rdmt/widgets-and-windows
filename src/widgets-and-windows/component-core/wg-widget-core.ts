// "Widgets Guru" package
// File contains widget core component builder utilities
// to implement widget core interface.

import { WidgetCoreViews } from "./component-core.i";

function createWindowView(): HTMLDivElement {
    const widget = document.createElement('div');
    widget.style.position = 'fixed';
    widget.style.overflow = 'hidden';
    return widget;
};

function createWindowHeaderView(): HTMLDivElement {
    const widgetHeader = document.createElement('div');
    widgetHeader.style.position         = 'fixed';
    widgetHeader.style.width            = '100%';
    widgetHeader.style.height           = 'max-content';
    widgetHeader.style.display          = 'flex';
    widgetHeader.style.flexDirection    = 'row';
    widgetHeader.style.justifyContent   = 'center';
    widgetHeader.style.alignItems       = 'left';
    return widgetHeader;
};

function createWindowContentView(): HTMLDivElement {
    const contentView = document.createElement('div');
    contentView.style.position  = 'fixed';
    contentView.style.minWidth  = '100%';
    contentView.style.minHeight = '100%';
    return contentView;
};

/**
 * ### Widget component constructor
 * Creates a bare assembled widget component due to `WidgetNodes`
 */
export class WGWidgetCore implements WidgetCoreViews {
    public constructor() {WGWidgetCore.assemle(this)};

    public readonly windowView: HTMLDivElement = createWindowView();
    public readonly windowHeaderView: HTMLDivElement = createWindowHeaderView();
    public readonly windowContentView: HTMLDivElement = createWindowContentView();

    private static assemle(element: WidgetCoreViews): void {
        element.windowView.append(
            element.windowHeaderView, element.windowContentView);
    };
};