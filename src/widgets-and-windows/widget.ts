import { WidgetCoreViews } from "./component-core/component-core.i";
import { WGWidgetCore } from "./component-core/wg-widget-core";
import { WGEffectDecorator, WGEffectController } from "./effects-decorators/effect-decorator.i";


export interface WidgetConstructorConfig {
    initialWidth: string,
    intitialHeight: string,
};

export class WGWidget {
    public constructor (
        config: WidgetConstructorConfig,
        protected readonly coreViews: WidgetCoreViews = new WGWidgetCore()) {
    };

    public makeKeyAndVisiable(): void {};
    public display(): void {};
    public destroy(): void {};

    private static registerWidgetOnSilkLayer(): void {};
    
    public applyEffect<T extends WGEffectController>(effect: WGEffectDecorator<T>): T {
        return new effect(this.coreViews);
    };
};
