// tempat untuk menmbungkus semua saga

import {all} from 'redux-saga/effects'
import { HomeWatcher } from '../screens/Home/redux/saga'

export function* allSaga () {
    yield all ([HomeWatcher()])
}