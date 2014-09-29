CKEDITOR.editorConfig = function(config)
{
	config.height = '400px';
	// It's magic but allow table style class
 	config.fillEmptyBlocks = false;

 	// Allow footer tag
 	config.extraAllowedContent = 'footer;q;header';

	// Toolbar configuration generated automatically by the editor based on config.toolbarGroups.
	config.toolbar = [
		{ items: [ 'Undo', 'Redo', 'RemoveFormat', 'Source'] },
		{ items: [ 'Bold', 'Italic', 'Link' ] },
		{ items: [ 'header', 'quote', 'footer'] },
	];

	// my plugin (nkcr)
	config.extraPlugins = 'htmlbuttons';
	config.htmlbuttons = [
		{
			name: 'footer',
			icon: 'footer.png',
			html: 'footer.html',
			title: 'Ajouter un pied de page (p.ex copyright)'
		},
		{
			name: 'quote',
			icon: 'quote.png',
			html: 'quote.html',
			title: 'Mise en exergue'
		},
		{
			name: 'header',
			icon: 'header.png',
			html: 'header.html',
			title: 'Mise en exergue'
		},
	];

};