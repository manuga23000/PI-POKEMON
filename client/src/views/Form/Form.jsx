import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import validate from './validate';
import { getTypes } from '../../redux/actions';

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

        if (property === 'types') {
            setForm((prevForm) => ({
                ...prevForm,
                types: { ...prevForm.types, [event.target.id]: value },
            }));
        } else {
            setForm((prevForm) => ({ ...prevForm, [property]: value }));
        }
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const formErrors = validate(form);
        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
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
        <form onSubmit={submitHandler}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={form.name}
                    onChange={changeHandler}
                    name="name"
                />
                {errors.name && <p>{errors.name}</p>}
            </div>
            <div>
                <label>Image:</label>
                <input
                    type="text"
                    value={form.image}
                    onChange={changeHandler}
                    name="image"
                />
                {errors.image && <p>{errors.image}</p>}
            </div>
            <div>
                <label>Life:</label>
                <input
                    type="number"
                    value={form.life}
                    onChange={changeHandler}
                    name="life"
                />
                {errors.life && <p>{errors.life}</p>}
            </div>
            <div>
                <label>Attack:</label>
                <input
                    type="number"
                    value={form.attack}
                    onChange={changeHandler}
                    name="attack"
                />
                {errors.attack && <p>{errors.attack}</p>}
            </div>
            <div>
                <label>Defense:</label>
                <input
                    type="number"
                    value={form.defense}
                    onChange={changeHandler}
                    name="defense"
                />
                {errors.defense && <p>{errors.defense}</p>}
            </div>
            <div>
                <label>Speed:</label>
                <input
                    type="number"
                    value={form.speed}
                    onChange={changeHandler}
                    name="speed"
                />
                {errors.speed && <p>{errors.speed}</p>}
            </div>
            <div>
                <label>Height:</label>
                <input
                    type="number"
                    value={form.height}
                    onChange={changeHandler}
                    name="height"
                />
                {errors.height && <p>{errors.height}</p>}
            </div>
            <div>
                <label>Weight:</label>
                <input
                    type="number"
                    value={form.weight}
                    onChange={changeHandler}
                    name="weight"
                />
                {errors.weight && <p>{errors.weight}</p>}
            </div>
            <div>
                <label>Type 1:</label>
                <select
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
                </select>
                {errors.types && <p>{errors.types}</p>}
            </div>
            <div>
                <label>Type 2:</label>
                <select
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
                </select>
                {errors.types && <p>{errors.types}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;
