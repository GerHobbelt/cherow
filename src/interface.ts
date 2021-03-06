import { Flags } from './masks';
import { Token } from './token';
import { Comment } from './estree';

export interface Options {
    next?: boolean;
    ranges?: boolean;
    locations?: boolean;
    comments?: CollectComments;
    loc?: boolean;
    raw?: boolean;
    directives?: boolean;
    jsx?: boolean;
    flow?: boolean;
    source?: string;
    globalReturn?: boolean;
    sourceType?: 'module' | 'script';
    v8?: boolean;
}

export interface SavedState {
    index: number;
    column: number;
    line: number;
    token: Token;
    tokenValue: any;
    flags: Flags;
    startPos: number;
    endPos: number;
    startLine: number;
    endLine: number;
    startColumn: number;
    endColumn: number;
    tokenRegExp: any;
    tokenRaw: any;
}

export interface Location {
    index: number;
    start: number;
    line: number;
    column: number;
}

/**
 * The type of the `onComment` option.
 */
export type CollectComments = void | Comment[] | (
    (type: string, value: string, start: number, end: number, loc: any) => any
);