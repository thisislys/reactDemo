export function update(payload) {
    return {
        type: "UPDATE",
        payload
    }
}

export function plus(payload) {
    return {
        type: "PLUS",
        payload
    }
}

export function minus(payload) {
    return {
        type: "MINUS",
        payload
    }
}

export function summary(payload) {
    return {
        type: "SUMMARY",
        payload
    }
}

export function total(payload) {
    return {
        type: "TOTAL",
        payload
    }
}

export function checked(payload) {
    return {
        type: "CHECKED",
        payload
    }
}