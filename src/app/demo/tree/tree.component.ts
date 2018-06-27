import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'wit-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  display = true;

  selectedFiles2 = [];
  filesTree4: any = [];
  constructor() { }

  ngOnInit() {
    const filesTree4 = [
      {
        "label": "Documents",
        "data": {select: true},
        "expandedIcon": "fa-folder-open",
        "collapsedIcon": "fa-folder",
        "children": [{
          "label": "Work",
          "data": "Work Folder",
          "expandedIcon": "fa-folder-open",
          "collapsedIcon": "fa-folder",
          "children": [{ "label": "Expenses.doc", "icon": "fa-file-word-o", "data": "Expenses Document" }, { "label": "Resume.doc", "icon": "fa-file-word-o", "data": "Resume Document" }]
        },
        {
          "label": "Home",
          "data": "Home Folder",
          "expandedIcon": "fa-folder-open",
          "collapsedIcon": "fa-folder",
          "children": [{ "label": "Invoices.txt", "icon": "fa-file-word-o", "data": "Invoices for this month" }]
        }]
      },
      {
        "label": "Pictures",
        "data": "Pictures Folder",
        "expandedIcon": "fa-folder-open",
        "collapsedIcon": "fa-folder",
        "selectable": false,
        "children": [
          { "label": "barcelona.jpg", "icon": "fa-file-image-o", "data": "Barcelona Photo" },
          { "label": "logo.jpg", "icon": "fa-file-image-o", "data": "PrimeFaces Logo" },
          { "label": "primeui.png", "icon": "fa-file-image-o", "data": "PrimeUI Logo" }]
      },
      {
        "label": "Movies",
        "data": "Movies Folder",
        "expandedIcon": "fa-folder-open",
        "collapsedIcon": "fa-folder",
        "children": [{
          "label": "Al Pacino",
          "data": {
            select: true
          },
          "children": [{ "label": "Scarface", "icon": "fa-file-video-o", "data": "Scarface Movie" }, { "label": "Serpico", "icon": "fa-file-video-o", "data": "Serpico Movie" }]
        },
        {
          "label": "Robert De Niro",
          "data": "De Niro Movies",
          "children": [{ "label": "Goodfellas", "icon": "fa-file-video-o", "data": "Goodfellas Movie" }, { "label": "Untouchables", "icon": "fa-file-video-o", "data": "Untouchables Movie" }]
        }]
      }
    ];
    // this.filesTree4 = this.transformTreeNode()
    this.traverse(filesTree4);
  }

  test() {
    console.log(this);
  }

  traverse(array) {
    // const sole = obj => {
    //   if (obj.data && obj.data.select) {
    //     this.selectedFiles2.push(obj);
    //   }
    //   if (obj.children) {
    //     for (let i = 0; i < obj.children.length; i++) {
    //       sole(obj.children[i]);
    //     }
    //   }
    // };

    const temp = [];
    if (array) {
      array.forEach(obj => {
        temp.push(this.transformTreeNode(obj));
      });
    }
    this.filesTree4 = temp;
    this.selectedFiles2 = [this.filesTree4[0].children[0], this.filesTree4[2].children[1]];
  }

  transformTreeNode(data, parent?) {
    if (data) {
      const temp = {
        label: '中语言',
        data: data.data,
        test: 'abc4',
        test1: 'abc3',
        test3: 'abc2',
        expandedIcon: 'fa-folder-open',
        collapsedIcon: 'fa-folder',
        expanded: false,
        children: null,
        parent: parent
      };
      if (data.children) {
        const arr = [];
        for (const item of data.children) {
          arr.push(this.transformTreeNode(item, temp));
        }
        temp.children = arr;
      }
      return temp;
    }
    return null;
  }
}
