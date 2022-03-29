import * as React from 'react';
import { components } from 'react-select';
import { useState, useEffect } from 'react';
import {
    Div,
    Label,
    DivConteudo,
    BotaoNovo,
    SelectCustom,
    DivSingleValue,
    DivBotao,
    DivOption,
    LabelPrimary,
    LabelSecondary
} from './styles';


export interface IProps {
    fieldLogicalName: any;
    isControlVisible: boolean;
    isControlDisabled: boolean;
    formCreate: any;
    formView: any;
    openFormCreate: any;
    openFormView: any;
    entityLogicalName: any;
    entityName: any;
    enableCreate: boolean;
    enableSelectedValueLink: boolean;
    fetchXml: any;
    image: any;
    primaryField: any;
    secondaryField: any;
}

interface Contato {
    value: string;
    label: string;
    info: string;
}

const CustomLookup: React.FC<IProps> = (props) => {

    const [contato, setContato] = useState<Contato | undefined>(undefined);

    const options = async (inputValue: string) => {
        const records = await retrieveValues(inputValue);
        const contatos = records.map(function (rec: any) {
            return { value: rec.eve_contactosporinstitucionid, label: rec[props.primaryField], info: rec[props.secondaryField] };
        });

        return contatos;
    }

    const selectStyles = {
        menuPortal: (zindex: any) => ({
            ...zindex, zIndex: 9999
        }),
        menuList: (styles: any) => ({
            ...styles,
            padding: 0,
            paddingTop: 0,
            paddingBottom: 0,
            maxHeigth: 100
        }),
        menu: (styles: any) => ({
            marginTop: 1
        })
    };

    const Menu = (menuProps: any) => {
        return (
            <React.Fragment>
                <components.Menu  {...menuProps}>
                    <Div>
                        <Label>{props.entityName}</Label>
                    </Div>
                    <DivConteudo>
                        {menuProps.children}
                    </DivConteudo>

                    {props.enableCreate ?
                        <DivBotao>
                            <BotaoNovo className='pa-o pa-av pa-gl pa-au pa-rx flexbox' onClick={openQuickCreate}>+ Novo {props.entityName}</BotaoNovo>
                        </DivBotao>
                        : null}

                </components.Menu>
            </React.Fragment>
        );
    }

    const DropdownIndicator = (indicatorProps: any) => {
        return (
            <components.DropdownIndicator {...indicatorProps}>
                <span className='symbolFont SearchButton-symbol pa-bn pa-bg pa-cq'></span>
            </components.DropdownIndicator>
        );
    };

    const MultiValueLabel = (multiValueProps: any) => {
        return (
            <components.MultiValueLabel
                {...multiValueProps}
                innerProps={{
                    ...multiValueProps.innerProps,
                    onClick: (e: any) => {
                        e.stopPropagation();
                        e.preventDefault();

                        if (props.enableSelectedValueLink)
                            openViewItem();
                    }
                }}
            >
                <DivSingleValue>
                    {multiValueProps.children}
                </DivSingleValue>
            </components.MultiValueLabel>
        );
    };

    const MultiValueRemove = (multiValueRemoveprops: any) => {
        return (
            <components.MultiValueRemove {...multiValueRemoveprops}>
                <span className='symbolFont Cancel-symbol pa-bn pa-bg pa-cq pa-sr'></span>
            </components.MultiValueRemove>
        );
    };

    const Option = (optionProps: any) => {
        return (
            <components.Option {...optionProps}>
                <DivOption>
                    <LabelPrimary>{optionProps.label}</LabelPrimary>
                    <LabelSecondary>{optionProps.data.info}</LabelSecondary>
                </DivOption>
            </components.Option>
        );
    };

    function openQuickCreate() {
        let formTarget = 1;
        let formPosition = 1;
        let pageInput = {};

        switch (props.openFormCreate.toLowerCase()) {
            case "modal":
                formTarget = 2;
                formPosition = 1;
                break;
            case "side":
                formTarget = 2;
                formPosition = 2;
                break;
        }

        if (props.formCreate != "") {
            pageInput = {
                pageType: "entityrecord",
                entityName: props.entityLogicalName,
                formId: props.formView
            };
        } else {
            pageInput = {
                pageType: "entityrecord",
                entityName: props.entityLogicalName,
            };
        }

        var navigationOptions = {
            target: formTarget,
            height: { value: 80, unit: "%" },
            width: { value: 70, unit: "%" },
            position: formPosition
        };

        // @ts-ignore
        Xrm.Navigation.navigateTo(pageInput, navigationOptions).then(
            function (returnValue: any) {
                if (returnValue != null && returnValue.savedEntityReference != null) {
                    let record = returnValue.savedEntityReference[0];
                    setContato({ value: record.id.replace("{", "").replace("}", ""), label: record[props.primaryField], info: record[props.secondaryField] });
                }
            },
            function (error: any) {
                console.log(error);
            });
    }

    function openViewItem() {
        let formTarget = 1;
        let formPosition = 1;
        let pageInput = {};

        switch (props.openFormView.toLowerCase()) {
            case "modal":
                formTarget = 2;
                formPosition = 1;
                break;
            case "side":
                formTarget = 2;
                formPosition = 2;
                break;
        }

        if (props.formView != "") {
            pageInput = {
                pageType: "entityrecord",
                entityName: props.entityLogicalName,
                entityId: contato?.value,
                formId: props.formView
            };
        } else {
            pageInput = {
                pageType: "entityrecord",
                entityName: props.entityLogicalName,
                entityId: contato?.value,
            };
        }

        var navigationOptions = {
            target: formTarget,
            height: { value: 80, unit: "%" },
            width: { value: 70, unit: "%" },
            position: formPosition
        };

        // @ts-ignore
        Xrm.Navigation.navigateTo(pageInput, navigationOptions);
    }

    function onChange(selectedOption: any) {
        if (contato != null) {
            const novoContato = selectedOption.filter((item: Contato) => (item.value != contato.value));
            setContato(novoContato[0]);
        } else {
            setContato(selectedOption[0]);
        }
    }

    async function retrieveValues(searchValue: string) {
        if (props.fetchXml != "") {
            let fetchXml = "?fetchXml=" + props.fetchXml;

            if (searchValue != "") {
                fetchXml = fetchXml.replace("{0}", searchValue);
            } else {
                fetchXml = fetchXml.replace("{0}", "");
            }

            // @ts-ignore
            var resultado = await Xrm.WebApi.retrieveMultipleRecords(props.entityLogicalName, fetchXml);
            console.log(resultado?.entities);
            return resultado?.entities;

        } else {
            return null;
        }
    }

    useEffect(() => {
        if (contato != null) {
            var lookup = [{
                entityType: props.entityLogicalName,
                id: contato.value,
                name: contato.label
            }];

            // @ts-ignore
            Xrm.Page.getAttribute(props.fieldLogicalName).setValue(lookup);
        } else {
            // @ts-ignore
            Xrm.Page.getAttribute(props.fieldLogicalName).setValue(null);
        }
    }, [contato]);

    return <SelectCustom
        value={contato}
        onChange={onChange}
        classNamePrefix="Select"
        isMulti={true}
        styles={selectStyles}
        menuPortalTarget={document.body}
        defaultOptions
        loadOptions={options}
        isDisabled={props.isControlDisabled}
        placeholder="---"
        components={{ Menu, MultiValueLabel, MultiValueRemove, DropdownIndicator, Option }}
        hideSelectedOptions={false}
        backspaceRemovesValue={false}
        openMenuOnClick={false}
        maxMenuHeight={150}
    ></SelectCustom>;
}

export default CustomLookup;
