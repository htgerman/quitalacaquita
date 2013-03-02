title: Blog
menu: Blog
menu-locgroup: main
order: 50
show-if: has_blog

<div class="page-header">
	<h2>Nuestro Blog</h2>
</div>

<div class="row-fluid">
    <div class="span8">
        <span data-lift="if?extra_true=has_blog">Bienvenido a nuestro blog. Aquí publicamos noticias y otras cositas que nos gustan:</span>
        <div data-lift="if?extra_true=has_blog">
           <ul data-lift="blog.posts?max=15">
               <li data-post="item">
                <h3><a data-post="link" href="#">Blog Post</a></h3>
                <h4><span data-post="date">2012/12/14</span></h4>
                <div data-post="shortcontent">Post Content goes here</div>
                <div data-post="more"><a href="#">Leer más ...</a></div>
               </li>
           </ul>

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

