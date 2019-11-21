import { createActions, createReducer } from "reduxsauce";

// Created Actions Types and Creators Actions
export const { Types, Creators } = createActions({
  toggleLesson: ["module", "lesson"]
});

const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: "Iniciando com React",
      lessons: [
        { id: 1, title: "Primeira aula" },
        { id: 2, title: "Segunda aula" },
        { id: 3, title: "Terceira aula" },
        { id: 4, title: "Quarta aula" }
      ]
    },
    {
      id: 2,
      title: "Aprendendo React",
      lessons: [
        { id: 1, title: "Primeira aula" },
        { id: 2, title: "Segunda aula" },
        { id: 3, title: "Terceira aula" },
        { id: 4, title: "Quarta aula" }
      ]
    }
  ]
};

const toggle = (state = INITIAL_STATE, action) => ({
  ...state,
  activeLesson: action.lesson,
  activeModule: action.module
});

// Created Reducers

export default createReducer(INITIAL_STATE, {
  [Types.TOGGLE_LESSON]: toggle
});
