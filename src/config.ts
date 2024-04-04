export const enum TypeBrick {
  none, wall, brick, stopBrick, disappearingBrick,
}

export const config = {
  bricks: {
    w: 16,
    h: 16,
    [TypeBrick.none]: {
      color: 'rgba(0,0,0,0)',
    },
    [TypeBrick.wall]: {
      color: '#c20505',
    },
    [TypeBrick.brick]: {
      color: '#ffe05d',
    },
    [TypeBrick.stopBrick]: {
      color: '#ffcb02',
    },
    [TypeBrick.disappearingBrick]: {
      color: '#06c3c7',
    },
  },
  game: {
    name: "TETЯIS GAME"
  }
}

