import React, {useState} from 'react';
import styled from "styled-components";
import Text from "../styles/text";
import HideShowIcon from "../images/HideShowIcon";
import Buttons from "../styles/Buttons";

const FormInputStyled = styled.div`
  margin-bottom: 16px;

  input {
    margin-top: 8px;
    margin-bottom: 4px;
    width: 100%;
    padding: 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    border-radius: 8px;
    outline: none;
    background-color: var(--color-gray-light);
    border: 1px solid var(--color-gray-light);
    padding-right: ${(props: IFormInputProps) => props.hideShow ? '35px' : '16px'};
  }

  button {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
`

interface IFormInputProps {
    name: string,
    type: string,
    placeholder?: string,
    value: string,
    hideShow?: boolean,
    validator?: (e: any) => void
    validate?: boolean
}

function FormInput(props: IFormInputProps) {
    const {name, type, placeholder, value, hideShow, validator, validate} = props

    const [hide, setHide] = useState(false)

    function handleHide(e: MouseEvent) {
        e.preventDefault()
        e.stopPropagation()
        setHide(!hide)
    }

    return (
        <FormInputStyled {...props}>
            <Text>
                {name}
            </Text>
            <div style={{
                position: 'relative'
            }}>
                <input style={{
                    borderColor: `${validate ? 'var(--color-red)' : 'var(--color-gray-light)'}`
                }} value={value} onChange={validator} placeholder={placeholder}
                       type={hide ? 'text' : type}/>
                {hideShow &&
                    <Buttons transparent={'true'} onClick={handleHide}>
                        <HideShowIcon/>
                    </Buttons>
                }
            </div>
            {validate &&
                <Text custom={'true'} fontSize={'10px'} lineHeight={'12px'} small color={'var(--color-red)'}>
                    Ошибка
                </Text>
            }
        </FormInputStyled>
    );
}

export default FormInput;