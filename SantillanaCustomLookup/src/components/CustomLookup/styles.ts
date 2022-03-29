import styled from 'styled-components';
import AsyncSelect from 'react-select/async';

export const Div = styled.div`
    width:100%;
    height: 18px;
    border: 1px solid;
    text-align: left;
    align-items: left;
    border-color: rgb(226, 226, 226);
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    background-color: white;
`;

export const DivBotao = styled.div`
    width:100%;
    height: 18px;
    border-left: 1px solid;
    border-right: 1px solid;
    border-bottom: 1px solid;
    text-align: left;
    align-items: left;
    border-color: rgb(226, 226, 226);
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    background-color: white;
`;

export const DivConteudo = styled.div`
    width:100%;
    text-align: left;
    align-items: left;
    border-left: 1px solid;
    border-right: 1px solid;
    border-bottom: 1px solid;
    border-color: rgb(226, 226, 226);
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    background-color: white;
`;

export const DivSingleValue = styled.div`
    width: fit-content;
`;

export const DivOption = styled.div`
    display: flex;
    flex-direction: column;
    height: 40px;   
`;

export const Label = styled.label`
    font-family: 'SegoeUI', 'Segoe UI';
    font-weight: normal;
    font-size: 12px;
    padding-left: 1rem;
    color: rgb(102, 102, 102);
`;

export const BotaoNovo = styled.button`
    padding-left: 10px;
    border: none;
    background: white;
    color: blue;
    text-align: left as const;
    
    :hover{
        text-decoration: underline;
    }
`;

export const ItemSelecionado = styled.a`
    color: rgb(17, 96, 183);
    font-family: 'SegoeUI', 'Segoe UI';
    white-space: nowrap;
    font-weight: bold;
    text-decoration: none;
    padding-left:5px;
    padding-right: 5px;

    :hover{
        font-weight: normal;
        text-decoration: underline;
    }
`;

export const LabelPrimary = styled.label`
    color: #333333;
    font-size: 14px;
    font-family: 'SegoeUI', 'Segoe UI';
`;

export const LabelSecondary = styled.label`
    color: #666666;
    font-size: 14px;
    font-family: 'SegoeUI', 'Segoe UI';
`;

export const SelectCustom = styled(AsyncSelect)`
    .Select__control {
        border: 0px;
        border-radius: 0;
        font-weight: bold;

        :hover{
            border: 1px solid black;
            font-weight: normal;

            .Select__multi-value__label{
                background-color: #EFEFEF;
                font-weight: normal;
                text-decoration: underline;
            }

            .Select__multi-value__remove{
                background-color: #EFEFEF;
                color:black;
                display: flex;

                :hover{
                    background-color: #D8D8D8;
                    color:black;
                }
            }

            .Select__dropdown-indicator{
                display: flex;
            }
        }
    }

    .Select__control--is-focused {
        box-shadow: 0 0 0 0px black;
        border: 1px solid black;
        font-weight: normal;
        outline: none;

        .Select__multi-value__label{
            background-color: #EFEFEF !important;
            font-weight: normal !important;
            text-decoration: underline !important;
        }

        .Select__multi-value__remove{
            background-color: #EFEFEF;
            color:black;
            display: flex;

            :hover{
                background-color: #D8D8D8;
                color:black;
            }
        }

        .Select__dropdown-indicator{
            display: flex;
        }
    }

    .Select__dropdown-indicator{
        display: none;
    }

    .Select__indicator-separator {
        display: none;
    }

    .Select__menu {
        color: pink;
        padding-top: 0px !important;
        margin-top:1px !important;
    }

    .Select__multi-value__label{
        background-color: #FFFFFF;
        margin-left: -10px !important;
        padding-left: 10px;
        padding-right: 10px;
        font-size: 14px;
        font-weight: bold;
        font-family: 'SegoeUI', 'Segoe UI';
        color: rgb(17, 96, 183);
        line-height: 1.5em;

        :hover{
            background-color: #EFEFEF;
            font-weight: normal;
            text-decoration: underline;
        }
    }

    .Select__multi-value__remove{
        background-color: #FFFFFF;
        color: #FFFFFF;
        display: none;
        
        :hover{
            background-color: #D8D8D8;
            color:black;
            display: block;
        }
    }

    .Select__value-container{
        padding:2px 6px;       
    }

    .Select__clear-indicator{
        display: none !important;
    }

    .Select__option--is-focused{
        background-color: #d8d8d8 !important;
    }
`;