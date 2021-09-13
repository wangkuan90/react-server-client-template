export type GameType = 'tian' | 'wei' | 'xiang';

export function getGameInfoByType(type: GameType) {
    if (type === 'tian') {
        return {
            name: '田字棋'
        }
    }
    if (type === 'wei') {
        return {
            name: '围棋'
        }
    }
    return {
        name: '象棋'
    }
}

export interface GameTypeInterface {
    type: GameType
}