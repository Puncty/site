export class Requester {
    private authHeader?: string;

    constructor(public baseUrl: string) {}

    get(path: string) {
        fetch(this.baseUrl + path, {
            headers: {
                Authorization: this.authHeader ?? "",
            },
        });
    }

    post(path: string, data: { [key: string]: string }) {
        fetch(this.baseUrl + path, {
            method: "POST",
            body: this.formDataFromRecord(data),
            headers: {
                Authorization: this.authHeader ?? "",
            },
        });
    }

    put(path: string, data: { [key: string]: string }) {
        fetch(this.baseUrl + path, {
            method: "PUT",
            body: this.formDataFromRecord(data),
            headers: {
                Authorization: this.authHeader ?? "",
            },
        });
    }

    patch(path: string, data: { [key: string]: string }) {
        fetch(this.baseUrl + path, {
            method: "PATCH",
            body: this.formDataFromRecord(data),
            headers: {
                Authorization: this.authHeader ?? "",
            },
        });
    }

    delete(path: string, data: { [key: string]: string }) {
        fetch(this.baseUrl + path, {
            method: "DELETE",
            body: this.formDataFromRecord(data),
            headers: {
                Authorization: this.authHeader ?? "",
            },
        });
    }

    private formDataFromRecord(record: { [key: string]: string }) {
        const form = new FormData();
        Object.entries(record).forEach(([k, v]) => {
            form.append(k, v);
        });

        return form;
    }

    setAuth(username: string, password: string) {
        this.authHeader =
            "Basic " +
            Buffer.from(username + ":" + password).toString("base64");
    }
}
