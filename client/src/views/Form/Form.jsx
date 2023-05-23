import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTypes } from '../../redux/actions';
import validateForm from './validate';
import {
    FormContainer,
    Formul,
    Title,
    InputContainer,
    Input,
    Select,
    Error,
    SubmitButton,
} from './StyleForm';

function Form() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTypes());
    }, [dispatch]);

    const types = useSelector((state) => state.types);

    const initialState = {
        name: '',
        image: '',
        life: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        types: {
            type1: '',
            type2: '',
        },
    };

    const [form, setForm] = useState(initialState);
    const [errors, setErrors] = useState({});

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setForm((prevForm) => {
            let updatedForm;

            if (property === 'types') {
                updatedForm = {
                    ...prevForm,
                    types: { ...prevForm.types, [event.target.id]: value },
                };
            } else {
                updatedForm = { ...prevForm, [property]: value };
            }

            const formErrors = validateForm(updatedForm); // Utiliza el formulario actualizado
            setErrors(formErrors);

            return updatedForm;
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        if (Object.keys(errors).length === 0) {
            axios
                .post('http://localhost:3001/pokemons', form)
                .then((res) => {
                    alert(res.data);
                    setForm(initialState);
                })
                .catch((err) => alert(err));
        } else {
            alert('Please fill in all required fields');
        }
    };

    return (
        <FormContainer>
            <Formul onSubmit={submitHandler}>
                <Title>Create a Pokemon</Title>
                <InputContainer>
                    <Input
                        type="text"
                        value={form.name}
                        onChange={changeHandler}
                        name="name"
                        placeholder="Name"
                    />
                    <Error show={!!errors.name}>{errors.name}</Error>
                </InputContainer>
                <InputContainer>
                    <Input
                        type="text"
                        value={form.image}
                        onChange={changeHandler}
                        name="image"
                        placeholder="image"
                    />
                    <Error show={!!errors.image}>{errors.image}</Error>
                </InputContainer>
                <InputContainer>
                    <Input
                        type="number"
                        value={form.life}
                        onChange={changeHandler}
                        name="life"
                        placeholder="Life"
                    />
                    <Error show={!!errors.life}>{errors.life}</Error>
                </InputContainer>
                <InputContainer>
                    <Input
                        type="number"
                        value={form.attack}
                        onChange={changeHandler}
                        name="attack"
                        placeholder="Attack"
                    />
                    <Error show={!!errors.attack}>{errors.attack}</Error>
                </InputContainer>
                <InputContainer>
                    <Input
                        type="number"
                        value={form.defense}
                        onChange={changeHandler}
                        name="defense"
                        placeholder="Defense"
                    />
                    <Error show={!!errors.defense}>{errors.defense}</Error>
                </InputContainer>
                <InputContainer>
                    <Input
                        type="number"
                        value={form.speed}
                        onChange={changeHandler}
                        name="speed"
                        placeholder="Speed"
                    />
                    <Error show={!!errors.speed}>{errors.speed}</Error>
                </InputContainer>
                <InputContainer>
                    <Input
                        type="number"
                        value={form.height}
                        onChange={changeHandler}
                        name="height"
                        placeholder="Height"
                    />
                    <Error show={!!errors.height}>{errors.height}</Error>
                </InputContainer>
                <InputContainer>
                    <Input
                        type="number"
                        value={form.weight}
                        onChange={changeHandler}
                        name="weight"
                        placeholder="Weight"
                    />
                    <Error show={!!errors.weight}>{errors.weight}</Error>
                </InputContainer>
                <InputContainer>
                    <Select
                        value={form.types.type1}
                        onChange={changeHandler}
                        name="types"
                        id="type1"
                    >
                        <option value="">Select a type 1</option>
                        {types.map((type) => (
                            <option key={type.id} value={type.name}>
                                {type.name}
                            </option>
                        ))}
                    </Select>
                    <Error show={!!errors.types}>{errors.types}</Error>
                </InputContainer>
                <InputContainer>
                    <Select
                        value={form.types.type2}
                        onChange={changeHandler}
                        name="types"
                        id="type2"
                    >
                        <option value="">Select a type 2</option>
                        {types.map((type) => (
                            <option key={type.id} value={type.name}>
                                {type.name}
                            </option>
                        ))}
                    </Select>
                    {errors.types && <Error>{errors.types}</Error>}
                </InputContainer>
                <SubmitButton type="submit">Submit</SubmitButton>
            </Formul>
        </FormContainer>
    );
}

export default Form;
