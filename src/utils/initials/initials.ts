export const initials = (name: string): string => {
  const allInitials = name.match(/\b\w/g) || [];
  return ((allInitials.shift() || '') + (allInitials.pop() || '')).toUpperCase();
}
