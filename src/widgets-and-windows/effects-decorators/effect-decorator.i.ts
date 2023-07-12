// "Widgets Guru" package
// File contains widget's effect decorator definitions

import { WGWidgetCore } from "../component-core/wg-widget-core";


/**
 * Effect's contoller
 * 
 * All effects are supposued to implement a swith controller
 * for the applied effect, so the effect's effect switch can be
 * handled out of the effect.
 */
export interface WGEffectController {
    enable  (): void;
    disable (): void;
};

/**
 * Helper type to specify effect decorator classes
 */
export type WGEffectDecorator<effect extends WGEffectController> = new (target: WGWidgetCore) => effect