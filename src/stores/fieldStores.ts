import {computed, Ref, ref} from "vue";
import {defineStore} from "pinia";

import {TypeBrick} from "@/config.ts";
import {useGameStateStores} from "@/stores/gameStateStore.ts";

export const useFieldStores = defineStore('fieldStores', () => {
  const clearField = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];

  const field: Ref<number[][]> = ref([[]]);

  const init = () => {
    field.value = clearField.map((row) => row.map((cell) => cell));
    nextFigureIndex.value = Math.floor(Math.random() * figures.length);
  }

  const figures = [
    [
      [2, 2],
      [2, 2]
    ],
    [
      [2],
      [2],
      [2],
      [2]
    ],
    [
      [2],
      [2],
      [2, 2],
    ],
    [
      [0, 2],
      [0, 2],
      [2, 2],
    ],
    [
      [0, 2],
      [2, 2],
      [2],
    ],
    [
      [2],
      [2, 2],
      [0, 2],
    ],
    [
      [0, 2, 0],
      [2, 2, 2],
    ],
  ];


  const width = clearField[0].length;
  const height = clearField.length;

  function getCell(x: number, y: number): TypeBrick {
    return field.value[y - 1][x - 1] as TypeBrick;
  }

  function addRandomFigure(): boolean {
    let success = true;
    const figure = figures[nextFigureIndex.value];
    nextFigureIndex.value = Math.floor(Math.random() * figures.length);
    const x = Math.floor(Math.random() * (width - 3 * figure[0].length) + figure[0].length);
    const y = 0;
    for (let i = 0; i < figure.length; i++) {
      for (let j = 0; j < figure[i].length; j++) {
        if (field.value[y + i][x + j] !== TypeBrick.none && figure[i][j] !== 0) {
          success = false;
        }
        field.value[y + i][x + j] = figure[i][j];
      }
    }
    return success;
  }

  function step(): boolean {
    const isMoved = moveFigureDown();

    disappearance();
    if (!isMoved) {
      return !addRandomFigure();
    }
    return false;
  }

  function moveFigureDown(): boolean {
    let isMoved = false;
    save();

    for (let y = height - 1; y > -1; y--) {
      for (let x = 0; x < width; x++) {
        if (field.value[y][x] === TypeBrick.brick) {
          if (field.value[y + 1][x] === TypeBrick.none) {
            field.value[y + 1][x] = field.value[y][x];
            field.value[y][x] = TypeBrick.none;
            isMoved = true;
          } else {
            restore();
            stopMoving();
            testLine();
            return false;
          }
        }
      }
    }
    return isMoved;
  }

  const savedField = ref("");

  function save() {
    savedField.value = JSON.stringify(field.value);
  }

  function restore() {
    field.value = JSON.parse(savedField.value);
  }

  function stopMoving() {
    save();
    for (let y = height - 1; y > -1; y--) {
      for (let x = 0; x < width; x++) {
        if (field.value[y][x] === TypeBrick.brick) {
          field.value[y][x] = TypeBrick.stopBrick;
        }
      }
    }
  }

  function testLine() {
    for (let y = height - 1; y > -1; y--) {
      let isFull = true;
      for (let x = 1; x < width - 1; x++) {
        if (field.value[y][x] !== TypeBrick.stopBrick) {
          isFull = false;
        }
      }
      if (isFull) {
        useGameStateStores().addLine();
        for (let x = 1; x < width - 1; x++) {
          field.value[y][x] = TypeBrick.disappearingBrick;
        }
      }
    }
  }

  function disappearance() {
    for (let y = height - 1; y > -1; y--) {
      for (let x = 1; x < width - 1; x++) {
        if (field.value[y][x] === TypeBrick.disappearingBrick) {
          for (let y1 = y; y1 > 1; y1--) {
            if (field.value[y1 - 1][x] === TypeBrick.brick) {
              break;
            }
            field.value[y1][x] = field.value[y1 - 1][x];
          }
          useGameStateStores().addScore();
        }
      }
    }
  }

  function move(dx: number) {
    save();

    const start = dx === 1 ? width - 1 : 0;
    const end = dx === 1 ? -1 : width;
    const step = dx === 1 ? -1 : 1;

    for (let y = height - 1; y > -1; y--) {
      for (let x = start; x !== end; x += step) {
        if (field.value[y][x] === TypeBrick.brick) {
          if (field.value[y][x + dx] === TypeBrick.none) {
            field.value[y][x + dx] = field.value[y][x];
            field.value[y][x] = TypeBrick.none;
          } else {
            restore();
            return;
          }
        }
      }
    }
  }

  function rotate() {
    const [[minX, minY], [maxX, maxY]] = findBoundFigure();

    const copy = JSON.parse(JSON.stringify(field.value));
    for (let y = minY; y <= maxY; y++) {
      for (let x = minX; x <= maxX; x++) {
        if (copy[y][x] === TypeBrick.brick) {
          copy[y][x] = TypeBrick.none;
        }
      }
    }
    const width = maxX - minX;
    const height = maxY - minY;
    for (let y = 0; y <= height; y++) {
      for (let x = 0; x <= width; x++) {
        if (field.value[y + minY][x + minX] === TypeBrick.brick) {

          const newArea = field.value[width - x + minY][y + minX];
          const oldArea = field.value[y + minY][x + minX];

          if (newArea === TypeBrick.stopBrick || newArea === TypeBrick.wall) {
            return;
          }
          if (oldArea !== TypeBrick.brick) {
            continue;
          }
          copy[width - x + minY][y + minX] = TypeBrick.brick;
        }
      }
    }

    field.value = copy;

  }

  function findBoundFigure(): [[number, number], [number, number]] {
    const foundCoords: [number, number][] = []
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (field.value[y][x] === TypeBrick.brick) {
          foundCoords.push([x, y]);
        }
      }
    }
    if (foundCoords.length === 0) {
      return [[0, 0], [0, 0]];
    }

    const min = foundCoords.reduce((acc, [x, y]) => [acc[0] < x ? acc[0] : x, acc[1] < y ? acc[1] : y], [foundCoords[0][0], foundCoords[0][1]]);
    const max = foundCoords.reduce((acc, [x, y]) => [acc[0] > x ? acc[0] : x, acc[1] > y ? acc[1] : y], [foundCoords[0][0], foundCoords[0][1]]);

    return [min, max];
  }


  const nextFigureIndex = ref(0);
  const nextFigure = computed(() => figures[nextFigureIndex.value]);

  return {
    nextFigure,
    getCell,
    width,
    height,
    step,
    rotate,
    init,
    move
  };
});