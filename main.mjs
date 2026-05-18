import grapesjs from 'grapesjs'

/**
 * @param {import("grapesjs").Editor} editor
 */
function example(editor) {
  editor.Components.addType('parent', {
    block: {
      label: 'Parent',
      content: { type: 'parent' },
    },
    isComponent: c => c.classList.contains('parent'),
    model: {
      defaults: {
        // this defines where this component can be dropped
        draggable: '[data-gjs-type="wrapper"]',
        // this defines what can be dropped into this component
        droppable: '[data-gjs-type="child"]',
        classes: 'parent',
        styles: `
          .parent {
            min-height: 64px;
            background-color: #e8ffe8;
            padding: 1rem;
          }
        `,
      },
    },
  })

  editor.Components.addType('child', {
    block: {
      label: 'Child',
      content: { type: 'child' },
    },
    isComponent: c => c.classList.contains('child'),
    model: {
      defaults: {
        // this defines where this component can be dropped
        draggable: '[data-gjs-type="parent"]',
        // this defines what can be dropped into this component (false = nothing)
        droppable: false,
        content: '<h1>Hello, world!</h1>',
        classes: 'child',
        styles: `
          .child {
            min-height: 64px;
            background-color: #e8e8ff;
          }
        `,
      },
    },
  })

  editor.Blocks.add('example', {
    label: 'Example',
    activate: true,
    content: '<h1>Hello, world!!!</h1>',
  })
}

/**
 * @param {import("grapesjs").Editor} editor
 */
function openBlocksByDefault(editor) {
  editor.onReady(() => {
    editor.Panels.getButton('views', 'open-blocks').set('active', true)
  })
}

/**
 * @param {import("grapesjs").Editor} editor
 */
function showProjectData(editor) {
  // console.log(editor.Panels.getPanels().map(panel => panel.id))
  editor.Panels.addButton('options', {
    label: '!',
    command() {
      editor.Modal.open({
        title: 'Project data',
        content: `
          <pre style="max-height: 50vh; overflow: auto; color: #eee;">${
            JSON.stringify(editor.getProjectData(), null, 2)
          }</pre>
        `,
      })
    }
  })
}

grapesjs.init({
  container: '#gjs',
  height: '100vh',
  storageManager: false,
  plugins: [
    example,
    openBlocksByDefault,
    showProjectData
  ],
})
