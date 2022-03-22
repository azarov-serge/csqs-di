import React from "react";
import {Store} from "redux";
import {Provider} from "react-redux";
import {Provider as InversifyProvider} from "inversify-react";
import {interfaces} from "inversify";
import {buildProviderModule} from "inversify-binding-decorators";


interface IocProviderProps {
    store: Store<any, any>;
    container: interfaces.Container;
}

interface IocProviderState {
}

class IocProvider extends React.Component<IocProviderProps, IocProviderState> {
    private childContainer: interfaces.Container;

    constructor(props: IocProviderProps) {
        super(props);

        this.childContainer = props.container.createChild();

        try {
            // Отражает все декораторы, предоставленные этим пакетом, и упаковывает их
            // в модуль, который будет загружен контейнером
            const module = buildProviderModule();
            this.childContainer.load(module);
        } catch (error) {
            console.error("Error on build reflected dependencies module.", error);
        }
    }

    render() {

        return (
            <InversifyProvider standalone container={this.childContainer}>
                {this.props.store ? (
                    <Provider store={this.props.store}>
                        {this.props.children}
                    </Provider>
                ) : (
                    this.props.children
                )}
            </InversifyProvider>
        );
    }
}

export default IocProvider;
