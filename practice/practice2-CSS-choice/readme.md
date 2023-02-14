# CSS选择器
    定义：用于查找或选取要设置的HTML元素

  ## 种类
   # 1. 简单选择器
        根据名称、id、类来选取元素
        - CSS 元素选择器
            元素选择器根据元素名称来选择 HTML 元素。

        - CSS id 选择器
            id 选择器使用 HTML 元素的 id 属性来选择特定元素。
            元素的 id 在页面中是唯一的，因此 id 选择器用于选择一个唯一的元素！
            要选择具有特定 id 的元素，请写一个井号（＃），后跟该元素的 id。
        - CSS 类选择器
            类选择器选择有特定 class 属性的 HTML 元素。
            如需选择拥有特定 class 的元素，请写一个句点（.）字符，后面跟类名。
        -CSS 通用选择器
            通用选择器（*）选择页面上的所有的 HTML 元素。
        - CSS 分组选择器
            分组选择器选取所有具有相同样式定义的 HTML 元素。
   # 2. 组合选择器
        根据特定关系来选取元素    
        - CSS 中有四种不同的组合器：
            后代选择器 (空格)
                后代选择器匹配属于指定元素后代的所有元素。
            子选择器 (>)
                子选择器匹配属于指定元素子元素的所有元素。
            相邻兄弟选择器 (+)
                相邻兄弟选择器匹配所有作为指定元素的相邻同级的元素。
                兄弟（同级）元素必须具有相同的父元素，“相邻”的意思是“紧随其后”。
            通用兄弟选择器 (~)
                通用兄弟选择器匹配属于指定元素的同级元素的所有元素。
   # 3. 伪类选择器
        根据特定状态选取元素
        例如，它可以用于：
            设置鼠标悬停在元素上时的样式
                a:hover 必须在 CSS 定义中的 a:link 和 a:visited 之后，才能生效！
                a:active 必须在 CSS 定义中的 a:hover 之后才能生效！
                伪类名称对大小写不敏感。
                - :first-child 伪类
                    :first-child 伪类与指定的元素匹配：该元素是另一个元素的第一个子元素。

                - :lang 伪类
                    :lang 伪类允许您为不同的语言定义特殊的规则。
            为已访问和未访问链接设置不同的样式
            设置元素获得焦点时的样式

        - 所有伪类
        :active	                a:active	                                选择活动的链接。
        :checked	            input:checked	                            选择每个被选中的 <input> 元素。
        :disabled	            input:disabled	                            选择每个被禁用的 <input> 元素。
        :empty	                p:empty	                                    选择没有子元素的每个 <p> 元素。
        :enabled	            input:enabled	                            选择每个已启用的 <input> 元素。
        :first-child	        p:first-child	                            选择作为其父的首个子元素的每个 <p> 元素。
        :first-of-type	        p:first-of-type	                            选择作为其父的首个 <p> 元素的每个 <p> 元素。
        :focus	                input:focus	                                选择获得焦点的 <input> 元素。
        :hover	                a:hover	                                    选择鼠标悬停其上的链接。
        :in-range	            input:in-range	                            选择具有指定范围内的值的 <input> 元素。
        :invalid	            input:invalid	                            选择所有具有无效值的 <input> 元素。
        :lang(language)        	p:lang(it)	                                选择每个 lang 属性值以 "it" 开头的 <p> 元素。
        :last-child	            p:last-child	                            选择作为其父的最后一个子元素的每个 <p> 元素。
        :last-of-type	        p:last-of-type	                            选择作为其父的最后一个 <p> 元素的每个 <p> 元素。
        :link	                a:link	                                    选择所有未被访问的链接。
        :not(selector)	        :not(p)	                                    选择每个非 <p> 元素的元素。
        :nth-child(n)	        p:nth-child(2)	                            选择作为其父的第二个子元素的每个 <p> 元素。
        :nth-last-child(n)	    p:nth-last-child(2)	                        选择作为父的第二个子元素的每个<p>元素，从最后一个子元素计数。
        :nth-last-of-type(n)	p:nth-last-of-type(2)	                    选择作为父的第二个<p>元素的每个<p>元素，从最后一个子元素计数
        :nth-of-type(n)	        p:nth-of-type(2)	                        选择作为其父的第二个 <p> 元素的每个 <p> 元素。
        :only-of-type	        p:only-of-type	                            选择作为其父的唯一 <p> 元素的每个 <p> 元素。
        :only-child	            p:only-child	                            选择作为其父的唯一子元素的 <p> 元素。
        :optional	            input:optional	                            选择不带 "required" 属性的 <input> 元素。
        :out-of-range	        input:out-of-range	                        选择值在指定范围之外的 <input> 元素。
        :read-only	            input:read-only	                            选择指定了 "readonly" 属性的 <input> 元素。
        :read-write	            input:read-write	                        选择不带 "readonly" 属性的 <input> 元素。
        :required	            input:required	                            选择指定了 "required" 属性的 <input> 元素。
        :root	                root	                                    选择元素的根元素。
        :target	                #news:target	                            选择当前活动的 #news 元素（单击包含该锚名称的 URL）。
        :valid	                input:valid	                                选择所有具有有效值的 <input> 元素。
        :visited	            a:visited	                                选择所有已访问的链接。

   #  4. 伪元素选择器
        选取元素的一部分并设置其样式
            设置元素的首字母、首行的样式
            在元素的内容之前或之后插入内容
            - ::first-line 伪元素用于向文本的首行添加特殊样式。
                ::first-line 伪元素只能应用于块级元素。

                以下属性适用于 ::first-line 伪元素：

                        字体属性
                        颜色属性
                        背景属性
                        word-spacing
                        letter-spacing
                        text-decoration
                        vertical-align
                        text-transform
                        line-height
                        clear

            - ::first-letter 伪元素
                ::first-letter 伪元素用于向文本的首字母添加特殊样式。

                ::first-letter 伪元素只适用于块级元素。

                下面的属性适用于 ::first-letter 伪元素：

                        字体属性
                        颜色属性
                        背景属性
                        外边距属性
                        内边距属性
                        边框属性
                        text-decoration
                        vertical-align（仅当 "float" 为 "none"）
                        text-transform
                        line-height
                        float
                        clear

            - CSS ::before 伪元素
                ::before 伪元素可用于在元素内容之前插入一些内容。
            - CSS - ::after 伪元素
                ::after 伪元素可用于在元素内容之后插入一些内容。
            - CSS - ::selection 伪元素
                ::selection 伪元素匹配用户选择的元素部分。

                以下 CSS 属性可以应用于 ::selection：

                        color
                        background
                        cursor
                        outline
   # 5. 属性选择器
        根据属性或属性值来选取元素


        [attribute]	                [target]	                选择带有 target 属性的所有元素。
        [attribute=value]	        [target=_blank]	            选择带有 target="_blank" 属性的所有元素。
        [attribute~=value]	        [title~=flower]	            选择带有包含 "flower" 一词的 title 属性的所有元素。
        [attribute|=value]	        [lang|=en]	                选择带有以 "en" 开头的 lang 属性的所有元素。en 必须是完整单词。
        [attribute^=value]	        a[href^="https"]	        选择其 href 属性值以 "https" 开头的每个 <a> 元素。
        [attribute$=value]	        a[href$=".pdf"]	            选择其 href 属性值以 ".pdf" 结尾的每个 <a> 元素。
        [attribute*=value]	        a[href*="w3school"]	        选择其 href 属性值包含子串 "w3school" 的每个 <a> 元素。