import { takeLatest, call, put, takeEvery, select, delay } from "redux-saga/effects"
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { fetchExampleTasks, selectTasks, fetchExampleTasksSucces, fetchExampleTasksFailure } from "./tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

function* fetchExampleTasksHandler() {
    try {
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        const exampleTasksWithId = exampleTasks.map(exampleTasks => ({
            ...exampleTasks,
            id: nanoid(),
        }));
        yield put(fetchExampleTasksSucces(exampleTasksWithId));
    } catch (error) {
        yield call(fetchExampleTasksFailure);
        yield call(alert, "Coś poszło nie tak!");
    }
}

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}
