/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Props {
  title: string;
}
class Component implements Props {
  public title: string;
  constructor(props: Props) {}
}

class Page extends Component {
  constructor(props: Props) {
    super(props);
  }
  pageInfo(): void {
    console.log(this.title);
  }
}

export {};
