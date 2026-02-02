// Provided requirements
//
// Sort the packages using the following criteria:
// - A package is **bulky** if its volume (Width x Height x Length) is greater than or equal to 1,000,000 cm³ or when one of its dimensions is greater or equal to 150 cm.
// - A package is **heavy** when its mass is greater or equal to 20 kg.
//
// You must dispatch the packages in the following stacks:
// - **STANDARD**: standard packages (those that are not bulky or heavy) can be handled normally.
// - **SPECIAL**: packages that are either heavy or bulky can't be handled automatically.
// - **REJECTED**: packages that are **both** heavy and bulky are rejected.

export enum StackName {
  'STANDARD',
  'SPECIAL',
  'REJECTED',
  // todo: i might want to propose more specific responses such as
  // SPECIAL_HEAVY
  // SPECIAL_BULKY
  // or if we're powering the input directly, we can return a validation object with stack name and reason like
  // interface StackResult {
  //   name: "STANDARD" | "SPECIAL" | "REJECTED";
  //   reason?: "HEAVY" | "BULKY" | "INVALID_INPUT" or something along those lines
  // }
}

const MAX_VOLUME = 1000000;
const MAX_CM = 150;
const MAX_KG = 20;
const validateCM = (cm: number) => typeof cm === 'number' && cm > 0;
const validateKG = (mass: number) => typeof mass === 'number' && mass > 0;

export const sort = (
  widthCM: number,
  heightCM: number,
  lengthCM: number,
  massKG: number
): StackName => {
  // keeping validated input its own check distinct from the bulky check
  // this will let us add more helpful input validation in the future beyond just 'rejected', since we reject valid input as well
  const cmsAreValid = [widthCM, heightCM, lengthCM].every(validateCM);
  const massIsValid = validateKG(massKG);
  if (!cmsAreValid || !massIsValid) {
    return StackName.REJECTED;
  }

  const isHeavy = massKG >= MAX_KG;
  const isLong = [widthCM, heightCM, lengthCM].some((cm) => cm >= MAX_CM);
  const isBulky = isLong || widthCM * heightCM * lengthCM >= MAX_VOLUME;

  if (isHeavy && isBulky) {
    return StackName.REJECTED; // todo: propose differentiating between rejected and invalid input
  }

  if (isHeavy || isBulky) {
    return StackName.SPECIAL; // todo: propose we return a specific reason something is special
  }

  return StackName.STANDARD;
};
