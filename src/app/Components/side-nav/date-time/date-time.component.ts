import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';

const TREE_DATA: MonthNode[] = [
  { name: 'Janeiro', children: [{ name: 'Grupo 1' }, { name: 'Grupo 2' }] },
  { name: 'Fevereiro', children: [{ name: 'Grupo 1' }, { name: 'Grupo 2' }] },
  { name: 'Março', children: [{ name: 'Grupo 1' }, { name: 'Grupo 2' }] },
  { name: 'Abril', children: [{ name: 'Grupo 1' }, { name: 'Grupo 2' }] },
  { name: 'Maio', children: [{ name: 'Grupo 1' }, { name: 'Grupo 2' }] },
  { name: 'Junho', children: [{ name: 'Grupo 1' }, { name: 'Grupo 2' }] },
  { name: 'Julho', children: [{ name: 'Grupo 1' }, { name: 'Grupo 2' }] },
  { name: 'Agosto', children: [{ name: 'Grupo 1' }, { name: 'Grupo 2' }] },
  { name: 'Setembro', children: [{ name: 'Grupo 1' }, { name: 'Grupo 2' }] },
  { name: 'Outubro', children: [{ name: 'Grupo 1' }, { name: 'Grupo 2' }] },
  { name: 'Novembro', children: [{ name: 'Grupo 1' }, { name: 'Grupo 2' }] },
  { name: 'Dezembro', children: [{ name: 'Grupo 1' }, { name: 'Grupo 2' }] }
];

interface MonthNode {
  name: string;
  children?: GroupNode[];
}

interface GroupNode {
  name: string;
  children?: ItemNode[];
}

interface ItemNode {
  name: string;
}
/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.scss'],
})
export class DateTimeComponent {
  private _transformer = (node: MonthNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
