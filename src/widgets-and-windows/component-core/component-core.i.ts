// "Widgets Guru" package
// File contains widget core component definitions

/**
 * ### Widget core element interface
 * 
 * Object that holds references to all widget's views.
 * Components are represented as HTMLDivElemenets and comes with predefined styling
 * to visually behave like a usual desktop window.
 * 
 * This structure is received as an input for widget contructors, which will assign
 * widget behavior and actions to it.
 * 
 * @property windowView - root node component, that holds all other components
 * @property windowHeaderView - window header, which shoud be used as a placeholder for persistent UI elements like utility actions or title
 * @property windowContentView - window client body node, that should hold client dynamic content and pripary UI
 */
export interface WidgetCoreViews {
    readonly windowView: HTMLDivElement
    readonly windowHeaderView: HTMLDivElement
    readonly windowContentView: HTMLDivElement
};
