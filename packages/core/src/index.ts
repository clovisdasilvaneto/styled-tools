// We use a queue approach instead of string because it is O(N)

import { parseTheme } from "./parser";
import { StyledToolsTheme } from "./types";
export type { StyledToolsTheme, VariablesQueue } from './types'

const StyledTools = (styledTheme: StyledToolsTheme) => {
  const { theme, variables } = parseTheme(styledTheme);

  const globals = `
    :root {
        ${variables.join("")}
    }
  `

  return { theme, globals }
}

export default StyledTools