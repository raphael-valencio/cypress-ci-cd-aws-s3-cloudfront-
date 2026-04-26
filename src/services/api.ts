import axios, { AxiosError } from "axios";

export interface Post {
	id: string | number;
	title: string;
	content: string;
}

const api = axios.create({
	baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const registerUser = (userData: Record<string, unknown>) => {
	return api.post("/users", userData);
};

export const login = async (email: string, password: string): Promise<{ token: string }> => {
	try {
		const response = await api.post("/users/login", { email, password });
		return response.data;
	} catch (error) {
		const axiosError = error as AxiosError<{ message?: string }>;
		if (axiosError.response) {
			throw new Error(axiosError.response.data.message || "Erro ao fazer login.");
		}
		if (axiosError.request) {
			throw new Error(
				"Erro ao conectar com o servidor. Tente novamente mais tarde.",
			);
		}
		throw new Error("Erro inesperado. Tente novamente mais tarde.");
	}
};

export const createPost = async (title: string, content: string, token: string | null) => {
	try {
		const response = await api.post(
			"/posts",
			{ title, content },
			{
				headers: {
					Authorization: `Bearer ${token}`,
					"Content-Type": "application/json",
				},
			},
		);
		return response.data;
	} catch (error) {
		const axiosError = error as AxiosError<{ message?: string }>;
		if (axiosError.response) {
			throw new Error(axiosError.response.data.message || "Erro ao criar postagem.");
		}
		if (axiosError.request) {
			throw new Error(
				"Erro ao conectar com o servidor. Tente novamente mais tarde.",
			);
		}
		throw new Error("Erro inesperado. Tente novamente mais tarde.");
	}
};

export const fetchPosts = async (page = 1, perPage = 5): Promise<{ posts: Post[]; totalPages: number }> => {
	try {
		const response = await api.get("/posts", { params: { page, perPage } });
		return response.data;
	} catch (error) {
		const axiosError = error as AxiosError<{ message?: string }>;
		if (axiosError.response) {
			throw new Error(
				axiosError.response.data.message || "Erro ao buscar postagens.",
			);
		}
		if (axiosError.request) {
			throw new Error(
				"Erro ao conectar com o servidor. Tente novamente mais tarde.",
			);
		}
		throw new Error("Erro inesperado. Tente novamente mais tarde.");
	}
};

export default api;
