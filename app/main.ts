import 'bootstrap';
import {Aurelia} from 'aurelia-framework';
import {ValidationConfig, TWBootstrapViewStrategy} from 'aurelia-validation';

export function configure(aurelia: Aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-validation',  (config: ValidationConfig) => {
            config.useViewStrategy((<any>TWBootstrapViewStrategy).AppendToInput);
        });

    aurelia.start().then(a => a.setRoot('app', document.body));
}