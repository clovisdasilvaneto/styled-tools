
import { VariablesQueue, StyledToolsTheme } from "./types";

// and string concat will be len(variables) + 1, which is quadratic
export const parseTheme = (styledTheme: StyledToolsTheme, variables: VariablesQueue = [], parentKey?: string) => {
    let theme: any = {}

    for (let key in styledTheme) {
        const prop = styledTheme[key];

        if (typeof prop === "object" && !Array.isArray(prop) && prop !== null) {
            const parsed = parseTheme(prop, variables, key)
            theme[key] = parsed.theme;

        } else if (typeof prop === "string" || typeof prop === "number") {
            if(parentKey) {
                theme[key] = `var(--${parentKey}-${key})`;
                variables.push(`--${parentKey}-${key}:${prop};`);
            }else {
                theme[key] = `var(--${key})`;
                variables.push(`--${key}:${prop};`);
            }
        } else {
            theme[key] = prop;
        }
    }

    return { theme, variables };
};