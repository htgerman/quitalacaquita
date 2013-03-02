title: Blog
menu: Blog
menu-locgroup: main
order: 50
show-if: has_blog

<div class="page-header">
	<h1>Nuestro Blog</h1>
</div>

<div class="row-fluid">
    <div class="span8">
        <span data-lift="if?extra_true=has_blog">Bienvenido a nuestro blog. Aquí publicamos noticias y otras cositas que nos gustan:</span>
        <div data-lift="if?extra_true=has_blog">
            <div data-lift="blog.simple"></div>
        </div>
    </div>
    <div class="span4">
        <h4>Entradas Anteriores</h4>
        <div data-lift="archived_posts">
        <div name="year-block">
            <h2 name="year">1999</h2>
            <div name="month-block">
                <h3 name="month">Febtember</h3>
                <ul>
                    <li name="post-block">
                    <span name="post-date">sometime</span>
                    »
                    <a name="post-title" href="#">Something fun</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </div>
</div>

