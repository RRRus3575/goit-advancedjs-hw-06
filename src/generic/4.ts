/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Props {
  props: {
    title?: string;
  };
}
class Component implements Props {
  constructor(public props: object) {}
}

class Page extends Component {
  constructor(props: object) {
    super(props);
  }
  pageInfo(): void {
    console.log(this.props.title);
  }
}

// export {};
