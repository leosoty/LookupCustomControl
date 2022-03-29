/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    sampleProperty: ComponentFramework.PropertyTypes.LookupProperty;
    entityLogicalName: ComponentFramework.PropertyTypes.StringProperty;
    entityName: ComponentFramework.PropertyTypes.StringProperty;
    formCreate: ComponentFramework.PropertyTypes.StringProperty;
    formView: ComponentFramework.PropertyTypes.StringProperty;
    openFormCreate: ComponentFramework.PropertyTypes.StringProperty;
    openFormView: ComponentFramework.PropertyTypes.StringProperty;
    fetchXml: ComponentFramework.PropertyTypes.StringProperty;
    enableCreate: ComponentFramework.PropertyTypes.WholeNumberProperty;
    enableSelectedValueLink: ComponentFramework.PropertyTypes.WholeNumberProperty;
    primaryField: ComponentFramework.PropertyTypes.StringProperty;
    secondaryField: ComponentFramework.PropertyTypes.StringProperty;
}
export interface IOutputs {
    sampleProperty?: ComponentFramework.LookupValue[];
}
