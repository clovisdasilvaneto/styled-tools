
import { VariablesQueue, StyledToolsTheme } from "./types";

// and string concat will be len(variables) + 1, which is quadratic
export const parseTheme = (styledTheme: StyledToolsTheme, variables: VariablesQueue = []) => {
    let theme: any = {}

    for (let key in styledTheme) {
        const prop = styledTheme[key];

        if (typeof prop === "object" && !Array.isArray(prop) && prop !== null) {
            const parsed = parseTheme(prop, variables)
            theme[key] = parsed.theme;

        } else if (typeof prop === "string" || typeof prop === "number") {
            theme[key] = `var(--${key})`;
            variables.push(`--${key}:${prop};`);
        } else {
            theme[key] = prop;
        }
    }

    return { theme, variables };
};