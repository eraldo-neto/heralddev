import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function FormField( { label, type, name, value, onChange } ) {
    const Input = styled.input`

    `;

    const isTypeTextArea = type === 'textarea';
    const tag = isTypeTextArea ? 'textarea' : 'input';

    const fieldId = `id_${name}`;

    return (
        <div>
            <label htmlFor={fieldId}>
                {label}:
                <Input 
                    as={tag}
                    id={fieldId}
                    type={type}
                    value={value}
                    name={name}
                    onChange={onChange}
                    />
            </label>
        </div>
    )
}

FormField.defaultProps = {
    type: 'text',
    value: '',
    onChange: () => {}
}

FormField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default FormField;

/*
Vamos utilizar uma lib para fazer algumas validações de forma mais pratica
npm install prop-types

Essa biblioteca adiciona alguns tipos fakes
como o js não é fortemente tipado em alguns casos precisamos 
validar campos que sejam exatamente aquilo que é esperado
como um telefone normalmente queremos um number 

para fazer o uso da lib faremos 
FormField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

faremos o import da lib 
import PropTypes from 'prop-types';

ao declarar uma prop devemos passar o valor default dela se nao for required como o label
label: PropTypes.string.isRequired,

FormField.defaultProps = {
    type: 'text',
    value: '',
    onChange: () => {},
}

Qualquer duvida sobre qualquer outro tipo de type eu recomendo olhar a documentação da lib

*/ 