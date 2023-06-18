import {fabric} from 'fabric';

const canvas = new fabric.Canvas('canvas', {
  backgroundColor: 'white'
});

const rect = new fabric.Rect({
  top: 100,
  left: 100,
  width: 20,
  height: 20,
  fill: 'transparent',
  stroke: 'red'
});

canvas.add(rect);


class MyTextbox extends fabric.Textbox {
  constructor(text: string, options?: fabric.ITextboxOptions | undefined) {
    super(text, options);
    super.setControlsVisibility({ml: false, mr: false, mt: false, mb: false});
  }

  stateProperties = fabric.Textbox.prototype.stateProperties?.concat('selected') ?? ['selected'];

  _render(ctx: CanvasRenderingContext2D) {
    super._render(ctx);

    ctx.save();

    const w = this.width ?? 0;
    const h = this.height ?? 0;
    const x = -w/2;
    const y = -h/2;

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = this.borderColor ?? "";
    ctx.moveTo(x, y);
    ctx.strokeRect(x, y, w, h);

    ctx.restore();
  }
}

const textbox = new MyTextbox("text", {
  top: 200,
  left: 200,
  fill: 'red',
  borderColor: 'green',
  hasBorders: true,
});


canvas.add(textbox);