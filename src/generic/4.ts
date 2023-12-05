/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Props {
  title: string;
}
class Component {
  constructor(public props: Props) {}
}

class Page extends Component {
  pageInfo(): void {
    console.log(this.props.title);
  }
}

// export {};
