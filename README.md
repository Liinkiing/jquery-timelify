# jquery-timelify
A little plugin I've made to create simple timeline

## Example 

Here is an example of what you can do with this plugin : 
![](http://puu.sh/pd2dg/6f9688cce7.gif)


## Usage
Simply clone this repository or download it to see an example of how your HTML structure should be.  

You have to include the css files ([FontAwesome](https://github.com/FortAwesome/Font-Awesome) is included). 
I also use [Animate.css](https://github.com/daneden/animate.css), for providing these greate animations !
After you imported your stylesheets, juste import jQuery and **jquery.timelify.js**, and you're ready !

Then, to initialize the plugin, you must have **jQuery**, then simply select your element (generally .timeline) and
use the **timelify()** function.

## Customizing

Because I'm using SCSS, you can easily custom the look and feel of your timeline. Simply edit variables in ![_variables.css](css/components/timelify/_variables.scss) to change for example the color of block, or the color of the vertical bar and background of h2.

You can also customize what animations you prefer to use. When calling the **timefly()** method, you can pass an object litteral to define settings.

Available settings are : 

| Settings  |Default value | Possible values |
|---|---|---|
|  animLeft |bounceInLeft | any valid Animate.css animations
|  animRight |bounceInRight | any valid Animate.css animations
|  animCenter | bounceInUp | any valid Animate.css animations
|  animSpeed | 600 | duration of animation (in **ms**)
|  offset | 150 | offset, in **px** at which blocks start to show

Each of these settings will modify how left, right, and centered blocks will appear.

## Example

Suppose you have an HTML who looks like this : 

```html
   
<div class="timeline">
   	<h2>2013</h2>
   	<ul class="timeline-items">
   		<li class="is-hidden timeline-item">
   			<h3>Title</h3>
   			<hr>
   			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cupiditate, delectus deserunt doloribus earum eveniet explicabo fuga iste magni maxime mollitia nemo neque, perferendis quod reprehenderit ut, vel veritatis voluptas?</p>
   			<hr>
   			<time>Date</time>
   		</li>
   	</ul>
   	<h2>2014</h2>
   	<ul class="timeline-items">
   		<li class="is-hidden timeline-item">
   			<h3>Title</h3>
   			<hr>
   			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aspernatur consequuntur culpa deserunt ea esse est inventore, ipsa laborum officia, quam quia quidem, rem sunt tempora tenetur ullam voluptatem.</p>
   			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolore harum iure quod ut! Accusamus aspernatur corporis est excepturi facere laudantium nesciunt nihil optio, quaerat quos rerum sunt suscipit voluptate?.</p>
   			<hr>
   			<time>Mars 2014</time>
   		</li>
   		<li class="is-hidden timeline-item centered">
   			<h3>Title</h3>
   			<hr>
   			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, cupiditate dicta dignissimos dolorem doloribus ducimus eos error ex molestiae nobis odio odit optio placeat quasi repudiandae, unde velit voluptate voluptatem!
   			</p>
   			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi consectetur cupiditate ea, eius excepturi expedita illum, incidunt ipsam iste modi obcaecati optio repellendus! Dolore dolores pariatur sint veniam voluptates!</p>
   			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequatur distinctio doloremque eos eum eveniet fuga molestiae mollitia nesciunt nisi nobis nostrum, odio omnis pariatur praesentium quibusdam sequi sint voluptates.</p>
   			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam, aspernatur commodi consequuntur corporis dicta, distinctio enim eos expedita, id iste laborum maxime nesciunt quaerat sed temporibus veniam vero voluptatem.</p>
   			<p><a
   					href="http://gamejolt.com/games/slender-the-cursed-forest/30950">Link</a>
   			</p>
   			<hr>
   			<time>Date</time>
   		</li>
   
   	</ul>
</div>
   	
   
```

Simply do `$('.timeline').timelify()`

Or if you want to customize, for example, how it appear from the right, and the center, you could do :

```javascript

    $('.timeline').timelify({
        animRight: "fadeInRight",
        animCenter: "zoomIn"
    })

```

You have to keep the same HTML structure as the example above.
