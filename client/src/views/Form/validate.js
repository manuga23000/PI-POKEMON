const validateForm = (input) => {
    try {
        let errors = {};

        // Validar nombre
        if (!input.name) {
            errors.name = 'El nombre es obligatorio';
        } else if (input.name.length < 3) {
            errors.name = 'El nombre debe tener al menos 3 caracteres';
        } else if (input.name.length > 20) {
            errors.name = 'El nombre no puede tener más de 20 caracteres';
        }

        // Validar imagen
        if (!input.image) {
            errors.image = 'La imagen es obligatoria';
        } else {
            const trimmedImage = input.image.trim(); // Eliminar espacios en blanco al principio y al final
            if (!/^https?:\/\/[^\s/$.?#].[^\s]*$/.test(trimmedImage)) {
                errors.image = 'La imagen debe ser una URL válida';
            }
        }

        // Validar vida
        if (!input.life) {
            errors.life = 'La vida es obligatoria';
        } else if (isNaN(input.life)) {
            errors.life = 'La vida debe ser un número';
        } else if (input.life < 1 || input.life > 255) {
            errors.life = 'La vida debe estar entre 1 y 255';
        }

        // Validar ataque
        if (!input.attack) {
            errors.attack = 'El ataque es obligatorio';
        } else if (isNaN(input.attack)) {
            errors.attack = 'El ataque debe ser un número';
        } else if (input.attack < 1 || input.attack > 255) {
            errors.attack = 'El ataque debe estar entre 1 y 255';
        }

        // Validar defensa
        if (!input.defense) {
            errors.defense = 'La defensa es obligatoria';
        } else if (isNaN(input.defense)) {
            errors.defense = 'La defensa debe ser un número';
        } else if (input.defense < 1 || input.defense > 255) {
            errors.defense = 'La defensa debe estar entre 1 y 255';
        }

        // Validar velocidad
        if (!input.speed) {
            errors.speed = 'La velocidad es obligatoria';
        } else if (isNaN(input.speed)) {
            errors.speed = 'La velocidad debe ser un número';
        } else if (input.speed < 1 || input.speed > 255) {
            errors.speed = 'La velocidad debe estar entre 1 y 255';
        }

        // Validar altura
        if (!input.height) {
            errors.height = 'La altura es obligatoria';
        } else if (isNaN(input.height)) {
            errors.height = 'La altura debe ser un número';
        } else if (input.height < 1 || input.height > 1000) {
            errors.height = 'La altura debe estar entre 1 y 1000 metros';
        }

        // Validar peso
        if (!input.weight) {
            errors.weight = 'El peso es obligatorio';
        } else if (isNaN(input.weight)) {
            errors.weight = 'El peso debe ser un número';
        } else if (input.weight < 1 || input.weight > 1000) {
            errors.weight = 'El peso debe estar entre 1 y 1000 kilogramos';
        }

        // Validar tipos
        if (!input.types.type1 && !input.types.type2) {
            errors.types = 'Debe seleccionar al menos un tipo';
        } else if (
            input.types.type1 &&
            input.types.type2 &&
            input.types.type1 === input.types.type2
        ) {
            errors.types = 'Los tipos no pueden ser iguales';
        }

        return errors;
    } catch (error) {
        throw new Error('Ocurrió un error en la validación');
    }
};

export default validateForm;
