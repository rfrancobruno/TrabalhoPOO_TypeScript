interface ITechsData {
    title: string;
    experience: number
}

interface ICreateUserData {
    nome?: string;
    email: string;
    password: string;
    techs: Array<string | number | ITechsData >
}

export default function createUser({ nome, email, password }: ICreateUserData) {
    const user = {
        nome,
        email,
        password
    }

    return user;
}
