import Spine from 'spine'
import 'spine/lib/local'
import 'spine/lib/manager'
import 'spine/lib/route'


export class App extends Spine.Controller {


  constructor(param) {
    super();
    this.el = param.el;
    //console.log('taking a peek under the hood, eh?! good for you!')
    //     @html require("views/sample")({version:Spine.version})
    this.html(require("./views/sample.jade")({version:Spine.version}));
  }

}
