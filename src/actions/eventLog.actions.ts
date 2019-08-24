// Copyright 2019 Superblocks AB
//
// This file is part of Superblocks Lab.
//
// Superblocks Lab is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation version 3 of the License.
//
// Superblocks Lab is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Superblocks Lab.  If not, see <http://www.gnu.org/licenses/>.

import { LogLevel } from '../models';

export const eventLogActions = {
    ADD_EVENT_LOG_ROW: 'ADD_EVENT_LOG_ROW',
    addEventLogRow(channel: LogLevel, msg: string) {
        return {
            type: eventLogActions.ADD_EVENT_LOG_ROW,
            data: {
                timestamp: new Date(),
                channel,
                msg
            }
        };
    },

    CLEAR_EVENT_LOG: 'CLEAR_EVENT_LOG',
    clearEventLog() {
        return {
            type: eventLogActions.CLEAR_EVENT_LOG
        };
    }
};