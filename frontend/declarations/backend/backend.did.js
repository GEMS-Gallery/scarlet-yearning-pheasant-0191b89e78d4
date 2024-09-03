export const idlFactory = ({ IDL }) => {
  return IDL.Service({ 'generateDog' : IDL.Func([], [IDL.Text], []) });
};
export const init = ({ IDL }) => { return []; };
