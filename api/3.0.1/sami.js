
window.projectVersion = '3.0.1';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:Contentful" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Contentful.html">Contentful</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Contentful_Delivery" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Contentful/Delivery.html">Delivery</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Contentful_Delivery_Console" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Contentful/Delivery/Console.html">Console</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Contentful_Delivery_Console_Command" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Contentful/Delivery/Console/Command.html">Command</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Contentful_Delivery_Console_Command_GenerateClassesCommand" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Contentful/Delivery/Console/Command/GenerateClassesCommand.html">GenerateClassesCommand</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Contentful_Delivery_Console_Application" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Delivery/Console/Application.html">Application</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Contentful_Delivery_Synchronization" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Contentful/Delivery/Synchronization.html">Synchronization</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Contentful_Delivery_Synchronization_DeletedAsset" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Delivery/Synchronization/DeletedAsset.html">DeletedAsset</a>                    </div>                </li>                            <li data-name="class:Contentful_Delivery_Synchronization_DeletedEntry" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Delivery/Synchronization/DeletedEntry.html">DeletedEntry</a>                    </div>                </li>                            <li data-name="class:Contentful_Delivery_Synchronization_DeletedResource" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Delivery/Synchronization/DeletedResource.html">DeletedResource</a>                    </div>                </li>                            <li data-name="class:Contentful_Delivery_Synchronization_Manager" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Delivery/Synchronization/Manager.html">Manager</a>                    </div>                </li>                            <li data-name="class:Contentful_Delivery_Synchronization_Query" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Delivery/Synchronization/Query.html">Query</a>                    </div>                </li>                            <li data-name="class:Contentful_Delivery_Synchronization_Result" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Delivery/Synchronization/Result.html">Result</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Contentful_Delivery_Tool" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Contentful/Delivery/Tool.html">Tool</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Contentful_Delivery_Tool_ClassGenerator" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Contentful/Delivery/Tool/ClassGenerator.html">ClassGenerator</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Contentful_Delivery_Asset" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Contentful/Delivery/Asset.html">Asset</a>                    </div>                </li>                            <li data-name="class:Contentful_Delivery_Client" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Contentful/Delivery/Client.html">Client</a>                    </div>                </li>                            <li data-name="class:Contentful_Delivery_ContentType" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Contentful/Delivery/ContentType.html">ContentType</a>                    </div>                </li>                            <li data-name="class:Contentful_Delivery_ContentTypeField" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Contentful/Delivery/ContentTypeField.html">ContentTypeField</a>                    </div>                </li>                            <li data-name="class:Contentful_Delivery_DynamicEntry" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Contentful/Delivery/DynamicEntry.html">DynamicEntry</a>                    </div>                </li>                            <li data-name="class:Contentful_Delivery_EntryInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Contentful/Delivery/EntryInterface.html">EntryInterface</a>                    </div>                </li>                            <li data-name="class:Contentful_Delivery_File" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Contentful/Delivery/File.html">File</a>                    </div>                </li>                            <li data-name="class:Contentful_Delivery_ImageFile" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Contentful/Delivery/ImageFile.html">ImageFile</a>                    </div>                </li>                            <li data-name="class:Contentful_Delivery_ImageOptions" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Contentful/Delivery/ImageOptions.html">ImageOptions</a>                    </div>                </li>                            <li data-name="class:Contentful_Delivery_InstanceCache" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Contentful/Delivery/InstanceCache.html">InstanceCache</a>                    </div>                </li>                            <li data-name="class:Contentful_Delivery_Link" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Contentful/Delivery/Link.html">Link</a>                    </div>                </li>                            <li data-name="class:Contentful_Delivery_Locale" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Contentful/Delivery/Locale.html">Locale</a>                    </div>                </li>                            <li data-name="class:Contentful_Delivery_LocalizedResource" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Contentful/Delivery/LocalizedResource.html">LocalizedResource</a>                    </div>                </li>                            <li data-name="class:Contentful_Delivery_Query" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Contentful/Delivery/Query.html">Query</a>                    </div>                </li>                            <li data-name="class:Contentful_Delivery_ResourceBuilder" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Contentful/Delivery/ResourceBuilder.html">ResourceBuilder</a>                    </div>                </li>                            <li data-name="class:Contentful_Delivery_Space" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Contentful/Delivery/Space.html">Space</a>                    </div>                </li>                            <li data-name="class:Contentful_Delivery_SpaceMismatchException" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Contentful/Delivery/SpaceMismatchException.html">SpaceMismatchException</a>                    </div>                </li>                            <li data-name="class:Contentful_Delivery_SystemProperties" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Contentful/Delivery/SystemProperties.html">SystemProperties</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Contentful_BearerToken" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Contentful/BearerToken.html">BearerToken</a>                    </div>                </li>                            <li data-name="class:Contentful_Client" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Contentful/Client.html">Client</a>                    </div>                </li>                            <li data-name="class:Contentful_Location" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Contentful/Location.html">Location</a>                    </div>                </li>                            <li data-name="class:Contentful_Query" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Contentful/Query.html">Query</a>                    </div>                </li>                            <li data-name="class:Contentful_ResourceArray" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Contentful/ResourceArray.html">ResourceArray</a>                    </div>                </li>                            <li data-name="class:Contentful_ResourceNotFoundException" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Contentful/ResourceNotFoundException.html">ResourceNotFoundException</a>                    </div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Contentful.html", "name": "Contentful", "doc": "Namespace Contentful"},{"type": "Namespace", "link": "Contentful/Delivery.html", "name": "Contentful\\Delivery", "doc": "Namespace Contentful\\Delivery"},{"type": "Namespace", "link": "Contentful/Delivery/Cache.html", "name": "Contentful\\Delivery\\Cache", "doc": "Namespace Contentful\\Delivery\\Cache"},{"type": "Namespace", "link": "Contentful/Delivery/Console.html", "name": "Contentful\\Delivery\\Console", "doc": "Namespace Contentful\\Delivery\\Console"},{"type": "Namespace", "link": "Contentful/Delivery/Mapper.html", "name": "Contentful\\Delivery\\Mapper", "doc": "Namespace Contentful\\Delivery\\Mapper"},{"type": "Namespace", "link": "Contentful/Delivery/Mapper/ContentType.html", "name": "Contentful\\Delivery\\Mapper\\ContentType", "doc": "Namespace Contentful\\Delivery\\Mapper\\ContentType"},{"type": "Namespace", "link": "Contentful/Delivery/Resource.html", "name": "Contentful\\Delivery\\Resource", "doc": "Namespace Contentful\\Delivery\\Resource"},{"type": "Namespace", "link": "Contentful/Delivery/Resource/ContentType.html", "name": "Contentful\\Delivery\\Resource\\ContentType", "doc": "Namespace Contentful\\Delivery\\Resource\\ContentType"},{"type": "Namespace", "link": "Contentful/Delivery/Synchronization.html", "name": "Contentful\\Delivery\\Synchronization", "doc": "Namespace Contentful\\Delivery\\Synchronization"},
            {"type": "Interface", "fromName": "Contentful\\Delivery\\Cache", "fromLink": "Contentful/Delivery/Cache.html", "link": "Contentful/Delivery/Cache/CacheItemPoolFactoryInterface.html", "name": "Contentful\\Delivery\\Cache\\CacheItemPoolFactoryInterface", "doc": "&quot;CacheItemPoolFactoryInterface.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Delivery\\Cache\\CacheItemPoolFactoryInterface", "fromLink": "Contentful/Delivery/Cache/CacheItemPoolFactoryInterface.html", "link": "Contentful/Delivery/Cache/CacheItemPoolFactoryInterface.html#method___construct", "name": "Contentful\\Delivery\\Cache\\CacheItemPoolFactoryInterface::__construct", "doc": "&quot;Empty constructor.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Cache\\CacheItemPoolFactoryInterface", "fromLink": "Contentful/Delivery/Cache/CacheItemPoolFactoryInterface.html", "link": "Contentful/Delivery/Cache/CacheItemPoolFactoryInterface.html#method_getCacheItemPool", "name": "Contentful\\Delivery\\Cache\\CacheItemPoolFactoryInterface::getCacheItemPool", "doc": "&quot;Returns a PSR-6 CacheItemPoolInterface object.&quot;"},
            
            
            {"type": "Class", "fromName": "Contentful\\Delivery\\Cache", "fromLink": "Contentful/Delivery/Cache.html", "link": "Contentful/Delivery/Cache/CacheClearer.html", "name": "Contentful\\Delivery\\Cache\\CacheClearer", "doc": "&quot;CacheClearer class.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Delivery\\Cache\\CacheClearer", "fromLink": "Contentful/Delivery/Cache/CacheClearer.html", "link": "Contentful/Delivery/Cache/CacheClearer.html#method___construct", "name": "Contentful\\Delivery\\Cache\\CacheClearer::__construct", "doc": "&quot;CacheClearer constructor.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Cache\\CacheClearer", "fromLink": "Contentful/Delivery/Cache/CacheClearer.html", "link": "Contentful/Delivery/Cache/CacheClearer.html#method_clear", "name": "Contentful\\Delivery\\Cache\\CacheClearer::clear", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Delivery\\Cache", "fromLink": "Contentful/Delivery/Cache.html", "link": "Contentful/Delivery/Cache/CacheItemPoolFactoryInterface.html", "name": "Contentful\\Delivery\\Cache\\CacheItemPoolFactoryInterface", "doc": "&quot;CacheItemPoolFactoryInterface.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Delivery\\Cache\\CacheItemPoolFactoryInterface", "fromLink": "Contentful/Delivery/Cache/CacheItemPoolFactoryInterface.html", "link": "Contentful/Delivery/Cache/CacheItemPoolFactoryInterface.html#method___construct", "name": "Contentful\\Delivery\\Cache\\CacheItemPoolFactoryInterface::__construct", "doc": "&quot;Empty constructor.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Cache\\CacheItemPoolFactoryInterface", "fromLink": "Contentful/Delivery/Cache/CacheItemPoolFactoryInterface.html", "link": "Contentful/Delivery/Cache/CacheItemPoolFactoryInterface.html#method_getCacheItemPool", "name": "Contentful\\Delivery\\Cache\\CacheItemPoolFactoryInterface::getCacheItemPool", "doc": "&quot;Returns a PSR-6 CacheItemPoolInterface object.&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Delivery\\Cache", "fromLink": "Contentful/Delivery/Cache.html", "link": "Contentful/Delivery/Cache/CacheWarmer.html", "name": "Contentful\\Delivery\\Cache\\CacheWarmer", "doc": "&quot;CacheWarmer class.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Delivery\\Cache\\CacheWarmer", "fromLink": "Contentful/Delivery/Cache/CacheWarmer.html", "link": "Contentful/Delivery/Cache/CacheWarmer.html#method___construct", "name": "Contentful\\Delivery\\Cache\\CacheWarmer::__construct", "doc": "&quot;CacheWarmer constructor.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Cache\\CacheWarmer", "fromLink": "Contentful/Delivery/Cache/CacheWarmer.html", "link": "Contentful/Delivery/Cache/CacheWarmer.html#method_warmUp", "name": "Contentful\\Delivery\\Cache\\CacheWarmer::warmUp", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Delivery", "fromLink": "Contentful/Delivery.html", "link": "Contentful/Delivery/Client.html", "name": "Contentful\\Delivery\\Client", "doc": "&quot;A Client is used to communicate the Contentful Delivery API.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Delivery\\Client", "fromLink": "Contentful/Delivery/Client.html", "link": "Contentful/Delivery/Client.html#method___construct", "name": "Contentful\\Delivery\\Client::__construct", "doc": "&quot;Client constructor.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Client", "fromLink": "Contentful/Delivery/Client.html", "link": "Contentful/Delivery/Client.html#method_getApi", "name": "Contentful\\Delivery\\Client::getApi", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Client", "fromLink": "Contentful/Delivery/Client.html", "link": "Contentful/Delivery/Client.html#method_getResourceBuilder", "name": "Contentful\\Delivery\\Client::getResourceBuilder", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Client", "fromLink": "Contentful/Delivery/Client.html", "link": "Contentful/Delivery/Client.html#method_getSdkName", "name": "Contentful\\Delivery\\Client::getSdkName", "doc": "&quot;The name of the library to be used in the User-Agent header.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Client", "fromLink": "Contentful/Delivery/Client.html", "link": "Contentful/Delivery/Client.html#method_getSdkVersion", "name": "Contentful\\Delivery\\Client::getSdkVersion", "doc": "&quot;The version of the library to be used in the User-Agent header.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Client", "fromLink": "Contentful/Delivery/Client.html", "link": "Contentful/Delivery/Client.html#method_getApiContentType", "name": "Contentful\\Delivery\\Client::getApiContentType", "doc": "&quot;Returns the Content-Type (MIME-Type) to be used when communication with the API.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Client", "fromLink": "Contentful/Delivery/Client.html", "link": "Contentful/Delivery/Client.html#method_getAsset", "name": "Contentful\\Delivery\\Client::getAsset", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Client", "fromLink": "Contentful/Delivery/Client.html", "link": "Contentful/Delivery/Client.html#method_getAssets", "name": "Contentful\\Delivery\\Client::getAssets", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Client", "fromLink": "Contentful/Delivery/Client.html", "link": "Contentful/Delivery/Client.html#method_getContentType", "name": "Contentful\\Delivery\\Client::getContentType", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Client", "fromLink": "Contentful/Delivery/Client.html", "link": "Contentful/Delivery/Client.html#method_getContentTypes", "name": "Contentful\\Delivery\\Client::getContentTypes", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Client", "fromLink": "Contentful/Delivery/Client.html", "link": "Contentful/Delivery/Client.html#method_getEnvironment", "name": "Contentful\\Delivery\\Client::getEnvironment", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Client", "fromLink": "Contentful/Delivery/Client.html", "link": "Contentful/Delivery/Client.html#method_getEntry", "name": "Contentful\\Delivery\\Client::getEntry", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Client", "fromLink": "Contentful/Delivery/Client.html", "link": "Contentful/Delivery/Client.html#method_getEntries", "name": "Contentful\\Delivery\\Client::getEntries", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Client", "fromLink": "Contentful/Delivery/Client.html", "link": "Contentful/Delivery/Client.html#method_getSpace", "name": "Contentful\\Delivery\\Client::getSpace", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Client", "fromLink": "Contentful/Delivery/Client.html", "link": "Contentful/Delivery/Client.html#method_resolveLink", "name": "Contentful\\Delivery\\Client::resolveLink", "doc": "&quot;Resolve a link to it&#039;s resource.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Client", "fromLink": "Contentful/Delivery/Client.html", "link": "Contentful/Delivery/Client.html#method_parseJson", "name": "Contentful\\Delivery\\Client::parseJson", "doc": "&quot;Parse a JSON string.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Client", "fromLink": "Contentful/Delivery/Client.html", "link": "Contentful/Delivery/Client.html#method_extractEnvironmentId", "name": "Contentful\\Delivery\\Client::extractEnvironmentId", "doc": "&quot;Checks a data structure and extracts the environment ID, if present.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Client", "fromLink": "Contentful/Delivery/Client.html", "link": "Contentful/Delivery/Client.html#method_syncRequest", "name": "Contentful\\Delivery\\Client::syncRequest", "doc": "&quot;Internal method for \\Contentful\\Delivery\\Synchronization\\Manager.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Client", "fromLink": "Contentful/Delivery/Client.html", "link": "Contentful/Delivery/Client.html#method_isPreview", "name": "Contentful\\Delivery\\Client::isPreview", "doc": "&quot;Returns true when using the Preview API.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Client", "fromLink": "Contentful/Delivery/Client.html", "link": "Contentful/Delivery/Client.html#method_getSynchronizationManager", "name": "Contentful\\Delivery\\Client::getSynchronizationManager", "doc": "&quot;Get an instance of the synchronization manager. Note that with the Preview API only an inital sync\nis giving valid results.&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Delivery\\Console", "fromLink": "Contentful/Delivery/Console.html", "link": "Contentful/Delivery/Console/Application.html", "name": "Contentful\\Delivery\\Console\\Application", "doc": "&quot;CLI Application with Helpers for the Contentful SDK.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Delivery\\Console\\Application", "fromLink": "Contentful/Delivery/Console/Application.html", "link": "Contentful/Delivery/Console/Application.html#method___construct", "name": "Contentful\\Delivery\\Console\\Application::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Console\\Application", "fromLink": "Contentful/Delivery/Console/Application.html", "link": "Contentful/Delivery/Console/Application.html#method_getDefaultCommands", "name": "Contentful\\Delivery\\Console\\Application::getDefaultCommands", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Delivery\\Console", "fromLink": "Contentful/Delivery/Console.html", "link": "Contentful/Delivery/Console/ClearCacheCommand.html", "name": "Contentful\\Delivery\\Console\\ClearCacheCommand", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Delivery\\Console\\ClearCacheCommand", "fromLink": "Contentful/Delivery/Console/ClearCacheCommand.html", "link": "Contentful/Delivery/Console/ClearCacheCommand.html#method_configure", "name": "Contentful\\Delivery\\Console\\ClearCacheCommand::configure", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Console\\ClearCacheCommand", "fromLink": "Contentful/Delivery/Console/ClearCacheCommand.html", "link": "Contentful/Delivery/Console/ClearCacheCommand.html#method_execute", "name": "Contentful\\Delivery\\Console\\ClearCacheCommand::execute", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Delivery\\Console", "fromLink": "Contentful/Delivery/Console.html", "link": "Contentful/Delivery/Console/WarmUpCacheCommand.html", "name": "Contentful\\Delivery\\Console\\WarmUpCacheCommand", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Delivery\\Console\\WarmUpCacheCommand", "fromLink": "Contentful/Delivery/Console/WarmUpCacheCommand.html", "link": "Contentful/Delivery/Console/WarmUpCacheCommand.html#method_configure", "name": "Contentful\\Delivery\\Console\\WarmUpCacheCommand::configure", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Console\\WarmUpCacheCommand", "fromLink": "Contentful/Delivery/Console/WarmUpCacheCommand.html", "link": "Contentful/Delivery/Console/WarmUpCacheCommand.html#method_execute", "name": "Contentful\\Delivery\\Console\\WarmUpCacheCommand::execute", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Delivery", "fromLink": "Contentful/Delivery.html", "link": "Contentful/Delivery/InstanceRepository.html", "name": "Contentful\\Delivery\\InstanceRepository", "doc": "&quot;InstanceRepository class.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Delivery\\InstanceRepository", "fromLink": "Contentful/Delivery/InstanceRepository.html", "link": "Contentful/Delivery/InstanceRepository.html#method___construct", "name": "Contentful\\Delivery\\InstanceRepository::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\InstanceRepository", "fromLink": "Contentful/Delivery/InstanceRepository.html", "link": "Contentful/Delivery/InstanceRepository.html#method_has", "name": "Contentful\\Delivery\\InstanceRepository::has", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\InstanceRepository", "fromLink": "Contentful/Delivery/InstanceRepository.html", "link": "Contentful/Delivery/InstanceRepository.html#method_set", "name": "Contentful\\Delivery\\InstanceRepository::set", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\InstanceRepository", "fromLink": "Contentful/Delivery/InstanceRepository.html", "link": "Contentful/Delivery/InstanceRepository.html#method_get", "name": "Contentful\\Delivery\\InstanceRepository::get", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\InstanceRepository", "fromLink": "Contentful/Delivery/InstanceRepository.html", "link": "Contentful/Delivery/InstanceRepository.html#method_generateCacheKey", "name": "Contentful\\Delivery\\InstanceRepository::generateCacheKey", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Delivery\\Mapper", "fromLink": "Contentful/Delivery/Mapper.html", "link": "Contentful/Delivery/Mapper/Asset.html", "name": "Contentful\\Delivery\\Mapper\\Asset", "doc": "&quot;Asset class.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Delivery\\Mapper\\Asset", "fromLink": "Contentful/Delivery/Mapper/Asset.html", "link": "Contentful/Delivery/Mapper/Asset.html#method_map", "name": "Contentful\\Delivery\\Mapper\\Asset::map", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Mapper\\Asset", "fromLink": "Contentful/Delivery/Mapper/Asset.html", "link": "Contentful/Delivery/Mapper/Asset.html#method_buildFile", "name": "Contentful\\Delivery\\Mapper\\Asset::buildFile", "doc": "&quot;Creates a File or a subclass thereof.&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Delivery\\Mapper", "fromLink": "Contentful/Delivery/Mapper.html", "link": "Contentful/Delivery/Mapper/BaseMapper.html", "name": "Contentful\\Delivery\\Mapper\\BaseMapper", "doc": "&quot;BaseMapper class.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Delivery\\Mapper\\BaseMapper", "fromLink": "Contentful/Delivery/Mapper/BaseMapper.html", "link": "Contentful/Delivery/Mapper/BaseMapper.html#method___construct", "name": "Contentful\\Delivery\\Mapper\\BaseMapper::__construct", "doc": "&quot;BaseMapper constructor.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Mapper\\BaseMapper", "fromLink": "Contentful/Delivery/Mapper/BaseMapper.html", "link": "Contentful/Delivery/Mapper/BaseMapper.html#method_hydrate", "name": "Contentful\\Delivery\\Mapper\\BaseMapper::hydrate", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Mapper\\BaseMapper", "fromLink": "Contentful/Delivery/Mapper/BaseMapper.html", "link": "Contentful/Delivery/Mapper/BaseMapper.html#method_buildSystemProperties", "name": "Contentful\\Delivery\\Mapper\\BaseMapper::buildSystemProperties", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Mapper\\BaseMapper", "fromLink": "Contentful/Delivery/Mapper/BaseMapper.html", "link": "Contentful/Delivery/Mapper/BaseMapper.html#method_normalizeFieldData", "name": "Contentful\\Delivery\\Mapper\\BaseMapper::normalizeFieldData", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Mapper\\BaseMapper", "fromLink": "Contentful/Delivery/Mapper/BaseMapper.html", "link": "Contentful/Delivery/Mapper/BaseMapper.html#method_injectClient", "name": "Contentful\\Delivery\\Mapper\\BaseMapper::injectClient", "doc": "&quot;Override this method for blocking the mapper from injecting the client property.&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Delivery\\Mapper", "fromLink": "Contentful/Delivery/Mapper.html", "link": "Contentful/Delivery/Mapper/ContentType.html", "name": "Contentful\\Delivery\\Mapper\\ContentType", "doc": "&quot;ContentType class.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Delivery\\Mapper\\ContentType", "fromLink": "Contentful/Delivery/Mapper/ContentType.html", "link": "Contentful/Delivery/Mapper/ContentType.html#method_map", "name": "Contentful\\Delivery\\Mapper\\ContentType::map", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Mapper\\ContentType", "fromLink": "Contentful/Delivery/Mapper/ContentType.html", "link": "Contentful/Delivery/Mapper/ContentType.html#method_mapField", "name": "Contentful\\Delivery\\Mapper\\ContentType::mapField", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Delivery\\Mapper\\ContentType", "fromLink": "Contentful/Delivery/Mapper/ContentType.html", "link": "Contentful/Delivery/Mapper/ContentType/Field.html", "name": "Contentful\\Delivery\\Mapper\\ContentType\\Field", "doc": "&quot;Field class.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Delivery\\Mapper\\ContentType\\Field", "fromLink": "Contentful/Delivery/Mapper/ContentType/Field.html", "link": "Contentful/Delivery/Mapper/ContentType/Field.html#method_map", "name": "Contentful\\Delivery\\Mapper\\ContentType\\Field::map", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Mapper\\ContentType\\Field", "fromLink": "Contentful/Delivery/Mapper/ContentType/Field.html", "link": "Contentful/Delivery/Mapper/ContentType/Field.html#method_injectClient", "name": "Contentful\\Delivery\\Mapper\\ContentType\\Field::injectClient", "doc": "&quot;Override this method for blocking the mapper from injecting the client property.&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Delivery\\Mapper", "fromLink": "Contentful/Delivery/Mapper.html", "link": "Contentful/Delivery/Mapper/DeletedAsset.html", "name": "Contentful\\Delivery\\Mapper\\DeletedAsset", "doc": "&quot;DeletedAsset class.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Delivery\\Mapper\\DeletedAsset", "fromLink": "Contentful/Delivery/Mapper/DeletedAsset.html", "link": "Contentful/Delivery/Mapper/DeletedAsset.html#method_map", "name": "Contentful\\Delivery\\Mapper\\DeletedAsset::map", "doc": "&quot;{@inheritdoc}&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Delivery\\Mapper", "fromLink": "Contentful/Delivery/Mapper.html", "link": "Contentful/Delivery/Mapper/DeletedContentType.html", "name": "Contentful\\Delivery\\Mapper\\DeletedContentType", "doc": "&quot;DeletedContentType class.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Delivery\\Mapper\\DeletedContentType", "fromLink": "Contentful/Delivery/Mapper/DeletedContentType.html", "link": "Contentful/Delivery/Mapper/DeletedContentType.html#method_map", "name": "Contentful\\Delivery\\Mapper\\DeletedContentType::map", "doc": "&quot;{@inheritdoc}&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Delivery\\Mapper", "fromLink": "Contentful/Delivery/Mapper.html", "link": "Contentful/Delivery/Mapper/DeletedEntry.html", "name": "Contentful\\Delivery\\Mapper\\DeletedEntry", "doc": "&quot;DeletedEntry class.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Delivery\\Mapper\\DeletedEntry", "fromLink": "Contentful/Delivery/Mapper/DeletedEntry.html", "link": "Contentful/Delivery/Mapper/DeletedEntry.html#method_map", "name": "Contentful\\Delivery\\Mapper\\DeletedEntry::map", "doc": "&quot;{@inheritdoc}&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Delivery\\Mapper", "fromLink": "Contentful/Delivery/Mapper.html", "link": "Contentful/Delivery/Mapper/Entry.html", "name": "Contentful\\Delivery\\Mapper\\Entry", "doc": "&quot;Entry class.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Delivery\\Mapper\\Entry", "fromLink": "Contentful/Delivery/Mapper/Entry.html", "link": "Contentful/Delivery/Mapper/Entry.html#method_map", "name": "Contentful\\Delivery\\Mapper\\Entry::map", "doc": "&quot;{@inheritdoc}&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Delivery\\Mapper", "fromLink": "Contentful/Delivery/Mapper.html", "link": "Contentful/Delivery/Mapper/Environment.html", "name": "Contentful\\Delivery\\Mapper\\Environment", "doc": "&quot;Environment class.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Delivery\\Mapper\\Environment", "fromLink": "Contentful/Delivery/Mapper/Environment.html", "link": "Contentful/Delivery/Mapper/Environment.html#method_map", "name": "Contentful\\Delivery\\Mapper\\Environment::map", "doc": "&quot;{@inheritdoc}&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Delivery\\Mapper", "fromLink": "Contentful/Delivery/Mapper.html", "link": "Contentful/Delivery/Mapper/Locale.html", "name": "Contentful\\Delivery\\Mapper\\Locale", "doc": "&quot;Locale class.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Delivery\\Mapper\\Locale", "fromLink": "Contentful/Delivery/Mapper/Locale.html", "link": "Contentful/Delivery/Mapper/Locale.html#method_map", "name": "Contentful\\Delivery\\Mapper\\Locale::map", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Mapper\\Locale", "fromLink": "Contentful/Delivery/Mapper/Locale.html", "link": "Contentful/Delivery/Mapper/Locale.html#method_injectClient", "name": "Contentful\\Delivery\\Mapper\\Locale::injectClient", "doc": "&quot;Override this method for blocking the mapper from injecting the client property.&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Delivery\\Mapper", "fromLink": "Contentful/Delivery/Mapper.html", "link": "Contentful/Delivery/Mapper/ResourceArray.html", "name": "Contentful\\Delivery\\Mapper\\ResourceArray", "doc": "&quot;ResourceArray class.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Delivery\\Mapper\\ResourceArray", "fromLink": "Contentful/Delivery/Mapper/ResourceArray.html", "link": "Contentful/Delivery/Mapper/ResourceArray.html#method_map", "name": "Contentful\\Delivery\\Mapper\\ResourceArray::map", "doc": "&quot;{@inheritdoc}&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Delivery\\Mapper", "fromLink": "Contentful/Delivery/Mapper.html", "link": "Contentful/Delivery/Mapper/Space.html", "name": "Contentful\\Delivery\\Mapper\\Space", "doc": "&quot;Space class.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Delivery\\Mapper\\Space", "fromLink": "Contentful/Delivery/Mapper/Space.html", "link": "Contentful/Delivery/Mapper/Space.html#method_map", "name": "Contentful\\Delivery\\Mapper\\Space::map", "doc": "&quot;{@inheritdoc}&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Delivery", "fromLink": "Contentful/Delivery.html", "link": "Contentful/Delivery/Query.html", "name": "Contentful\\Delivery\\Query", "doc": "&quot;A Query is used to filter and order collections when making API requests.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Delivery\\Query", "fromLink": "Contentful/Delivery/Query.html", "link": "Contentful/Delivery/Query.html#method_getQueryData", "name": "Contentful\\Delivery\\Query::getQueryData", "doc": "&quot;Returns the parameters to execute this query.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Query", "fromLink": "Contentful/Delivery/Query.html", "link": "Contentful/Delivery/Query.html#method_setInclude", "name": "Contentful\\Delivery\\Query::setInclude", "doc": "&quot;Set the amount of levels of links that should be resolved.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Query", "fromLink": "Contentful/Delivery/Query.html", "link": "Contentful/Delivery/Query.html#method_setLocale", "name": "Contentful\\Delivery\\Query::setLocale", "doc": "&quot;Sets the locale for which content should be retrieved. Set it to &lt;code&gt;*&lt;\/code&gt; to retrieve all locales.&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Delivery", "fromLink": "Contentful/Delivery.html", "link": "Contentful/Delivery/ResourceBuilder.html", "name": "Contentful\\Delivery\\ResourceBuilder", "doc": "&quot;ResourceBuilder class.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Delivery\\ResourceBuilder", "fromLink": "Contentful/Delivery/ResourceBuilder.html", "link": "Contentful/Delivery/ResourceBuilder.html#method___construct", "name": "Contentful\\Delivery\\ResourceBuilder::__construct", "doc": "&quot;ResourceBuilder constructor.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\ResourceBuilder", "fromLink": "Contentful/Delivery/ResourceBuilder.html", "link": "Contentful/Delivery/ResourceBuilder.html#method_getMapperNamespace", "name": "Contentful\\Delivery\\ResourceBuilder::getMapperNamespace", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\ResourceBuilder", "fromLink": "Contentful/Delivery/ResourceBuilder.html", "link": "Contentful/Delivery/ResourceBuilder.html#method_createMapper", "name": "Contentful\\Delivery\\ResourceBuilder::createMapper", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\ResourceBuilder", "fromLink": "Contentful/Delivery/ResourceBuilder.html", "link": "Contentful/Delivery/ResourceBuilder.html#method_getSystemType", "name": "Contentful\\Delivery\\ResourceBuilder::getSystemType", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\ResourceBuilder", "fromLink": "Contentful/Delivery/ResourceBuilder.html", "link": "Contentful/Delivery/ResourceBuilder.html#method_build", "name": "Contentful\\Delivery\\ResourceBuilder::build", "doc": "&quot;{@inheritdoc}&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Delivery\\Resource", "fromLink": "Contentful/Delivery/Resource.html", "link": "Contentful/Delivery/Resource/Asset.html", "name": "Contentful\\Delivery\\Resource\\Asset", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\Asset", "fromLink": "Contentful/Delivery/Resource/Asset.html", "link": "Contentful/Delivery/Resource/Asset.html#method_getSpace", "name": "Contentful\\Delivery\\Resource\\Asset::getSpace", "doc": "&quot;Returns the space this asset belongs to.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\Asset", "fromLink": "Contentful/Delivery/Resource/Asset.html", "link": "Contentful/Delivery/Resource/Asset.html#method_getEnvironment", "name": "Contentful\\Delivery\\Resource\\Asset::getEnvironment", "doc": "&quot;Returns the environment this asset belongs to.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\Asset", "fromLink": "Contentful/Delivery/Resource/Asset.html", "link": "Contentful/Delivery/Resource/Asset.html#method_getTitle", "name": "Contentful\\Delivery\\Resource\\Asset::getTitle", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\Asset", "fromLink": "Contentful/Delivery/Resource/Asset.html", "link": "Contentful/Delivery/Resource/Asset.html#method_getDescription", "name": "Contentful\\Delivery\\Resource\\Asset::getDescription", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\Asset", "fromLink": "Contentful/Delivery/Resource/Asset.html", "link": "Contentful/Delivery/Resource/Asset.html#method_getFile", "name": "Contentful\\Delivery\\Resource\\Asset::getFile", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\Asset", "fromLink": "Contentful/Delivery/Resource/Asset.html", "link": "Contentful/Delivery/Resource/Asset.html#method_jsonSerialize", "name": "Contentful\\Delivery\\Resource\\Asset::jsonSerialize", "doc": "&quot;{@inheritdoc}&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Delivery\\Resource", "fromLink": "Contentful/Delivery/Resource.html", "link": "Contentful/Delivery/Resource/BaseResource.html", "name": "Contentful\\Delivery\\Resource\\BaseResource", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\BaseResource", "fromLink": "Contentful/Delivery/Resource/BaseResource.html", "link": "Contentful/Delivery/Resource/BaseResource.html#method___construct", "name": "Contentful\\Delivery\\Resource\\BaseResource::__construct", "doc": "&quot;Resources in this SDK should not be built using &lt;code&gt;$new Class()&lt;\/code&gt;.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\BaseResource", "fromLink": "Contentful/Delivery/Resource/BaseResource.html", "link": "Contentful/Delivery/Resource/BaseResource.html#method_getSystemProperties", "name": "Contentful\\Delivery\\Resource\\BaseResource::getSystemProperties", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\BaseResource", "fromLink": "Contentful/Delivery/Resource/BaseResource.html", "link": "Contentful/Delivery/Resource/BaseResource.html#method_asLink", "name": "Contentful\\Delivery\\Resource\\BaseResource::asLink", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\BaseResource", "fromLink": "Contentful/Delivery/Resource/BaseResource.html", "link": "Contentful/Delivery/Resource/BaseResource.html#method_getId", "name": "Contentful\\Delivery\\Resource\\BaseResource::getId", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\BaseResource", "fromLink": "Contentful/Delivery/Resource/BaseResource.html", "link": "Contentful/Delivery/Resource/BaseResource.html#method_getType", "name": "Contentful\\Delivery\\Resource\\BaseResource::getType", "doc": "&quot;{@inheritdoc}&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Delivery\\Resource", "fromLink": "Contentful/Delivery/Resource.html", "link": "Contentful/Delivery/Resource/ContentType.html", "name": "Contentful\\Delivery\\Resource\\ContentType", "doc": "&quot;Content Types are schemas that define the fields of Entries. Every Entry can only contain values in the fields\ndefined by its Content Type, and the values of those fields must match the data type defined in the Content Type.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\ContentType", "fromLink": "Contentful/Delivery/Resource/ContentType.html", "link": "Contentful/Delivery/Resource/ContentType.html#method_getSpace", "name": "Contentful\\Delivery\\Resource\\ContentType::getSpace", "doc": "&quot;Returns the space this content type belongs to.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\ContentType", "fromLink": "Contentful/Delivery/Resource/ContentType.html", "link": "Contentful/Delivery/Resource/ContentType.html#method_getEnvironment", "name": "Contentful\\Delivery\\Resource\\ContentType::getEnvironment", "doc": "&quot;Returns the environment this content type belongs to.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\ContentType", "fromLink": "Contentful/Delivery/Resource/ContentType.html", "link": "Contentful/Delivery/Resource/ContentType.html#method_getName", "name": "Contentful\\Delivery\\Resource\\ContentType::getName", "doc": "&quot;Returns the name of this content type.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\ContentType", "fromLink": "Contentful/Delivery/Resource/ContentType.html", "link": "Contentful/Delivery/Resource/ContentType.html#method_getFields", "name": "Contentful\\Delivery\\Resource\\ContentType::getFields", "doc": "&quot;Returns all the fields of this content type as an associative array. The key is the ID of the field.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\ContentType", "fromLink": "Contentful/Delivery/Resource/ContentType.html", "link": "Contentful/Delivery/Resource/ContentType.html#method_getDescription", "name": "Contentful\\Delivery\\Resource\\ContentType::getDescription", "doc": "&quot;Returns the content type&#039;s description.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\ContentType", "fromLink": "Contentful/Delivery/Resource/ContentType.html", "link": "Contentful/Delivery/Resource/ContentType.html#method_getField", "name": "Contentful\\Delivery\\Resource\\ContentType::getField", "doc": "&quot;Returns the field for the passed id.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\ContentType", "fromLink": "Contentful/Delivery/Resource/ContentType.html", "link": "Contentful/Delivery/Resource/ContentType.html#method_getDisplayField", "name": "Contentful\\Delivery\\Resource\\ContentType::getDisplayField", "doc": "&quot;Returns the the display field of a content type. Commonly this is the title.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\ContentType", "fromLink": "Contentful/Delivery/Resource/ContentType.html", "link": "Contentful/Delivery/Resource/ContentType.html#method_addUnknownField", "name": "Contentful\\Delivery\\Resource\\ContentType::addUnknownField", "doc": "&quot;Adds a runtime field, of type unknown.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\ContentType", "fromLink": "Contentful/Delivery/Resource/ContentType.html", "link": "Contentful/Delivery/Resource/ContentType.html#method_jsonSerialize", "name": "Contentful\\Delivery\\Resource\\ContentType::jsonSerialize", "doc": "&quot;{@inheritdoc}&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Delivery\\Resource\\ContentType", "fromLink": "Contentful/Delivery/Resource/ContentType.html", "link": "Contentful/Delivery/Resource/ContentType/Field.html", "name": "Contentful\\Delivery\\Resource\\ContentType\\Field", "doc": "&quot;A Field describes one field of a ContentType.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\ContentType\\Field", "fromLink": "Contentful/Delivery/Resource/ContentType/Field.html", "link": "Contentful/Delivery/Resource/ContentType/Field.html#method___construct", "name": "Contentful\\Delivery\\Resource\\ContentType\\Field::__construct", "doc": "&quot;Regular field construction should happen through the field mapper.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\ContentType\\Field", "fromLink": "Contentful/Delivery/Resource/ContentType/Field.html", "link": "Contentful/Delivery/Resource/ContentType/Field.html#method_getId", "name": "Contentful\\Delivery\\Resource\\ContentType\\Field::getId", "doc": "&quot;Returns the ID of the content type.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\ContentType\\Field", "fromLink": "Contentful/Delivery/Resource/ContentType/Field.html", "link": "Contentful/Delivery/Resource/ContentType/Field.html#method_getName", "name": "Contentful\\Delivery\\Resource\\ContentType\\Field::getName", "doc": "&quot;Returns the name of the content type.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\ContentType\\Field", "fromLink": "Contentful/Delivery/Resource/ContentType/Field.html", "link": "Contentful/Delivery/Resource/ContentType/Field.html#method_getType", "name": "Contentful\\Delivery\\Resource\\ContentType\\Field::getType", "doc": "&quot;Returns the type of the field.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\ContentType\\Field", "fromLink": "Contentful/Delivery/Resource/ContentType/Field.html", "link": "Contentful/Delivery/Resource/ContentType/Field.html#method_getLinkType", "name": "Contentful\\Delivery\\Resource\\ContentType\\Field::getLinkType", "doc": "&quot;If the field is a link, this will return the type of the linked resource.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\ContentType\\Field", "fromLink": "Contentful/Delivery/Resource/ContentType/Field.html", "link": "Contentful/Delivery/Resource/ContentType/Field.html#method_isRequired", "name": "Contentful\\Delivery\\Resource\\ContentType\\Field::isRequired", "doc": "&quot;Returns true if this field is required.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\ContentType\\Field", "fromLink": "Contentful/Delivery/Resource/ContentType/Field.html", "link": "Contentful/Delivery/Resource/ContentType/Field.html#method_isLocalized", "name": "Contentful\\Delivery\\Resource\\ContentType\\Field::isLocalized", "doc": "&quot;Returns true if the field contains locale dependent content.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\ContentType\\Field", "fromLink": "Contentful/Delivery/Resource/ContentType/Field.html", "link": "Contentful/Delivery/Resource/ContentType/Field.html#method_isDisabled", "name": "Contentful\\Delivery\\Resource\\ContentType\\Field::isDisabled", "doc": "&quot;True if the field is disabled.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\ContentType\\Field", "fromLink": "Contentful/Delivery/Resource/ContentType/Field.html", "link": "Contentful/Delivery/Resource/ContentType/Field.html#method_getItemsType", "name": "Contentful\\Delivery\\Resource\\ContentType\\Field::getItemsType", "doc": "&quot;If the field is an array, this returns the type of its items.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\ContentType\\Field", "fromLink": "Contentful/Delivery/Resource/ContentType/Field.html", "link": "Contentful/Delivery/Resource/ContentType/Field.html#method_getItemsLinkType", "name": "Contentful\\Delivery\\Resource\\ContentType\\Field::getItemsLinkType", "doc": "&quot;If the field is an array, and it&#039;s items are links, this returns the type of the linked resources.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\ContentType\\Field", "fromLink": "Contentful/Delivery/Resource/ContentType/Field.html", "link": "Contentful/Delivery/Resource/ContentType/Field.html#method_jsonSerialize", "name": "Contentful\\Delivery\\Resource\\ContentType\\Field::jsonSerialize", "doc": "&quot;{@inheritdoc}&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Delivery\\Resource", "fromLink": "Contentful/Delivery/Resource.html", "link": "Contentful/Delivery/Resource/DeletedAsset.html", "name": "Contentful\\Delivery\\Resource\\DeletedAsset", "doc": "&quot;A DeletedAsset describes an asset that has been deleted.&quot;"},
                    
            {"type": "Class", "fromName": "Contentful\\Delivery\\Resource", "fromLink": "Contentful/Delivery/Resource.html", "link": "Contentful/Delivery/Resource/DeletedContentType.html", "name": "Contentful\\Delivery\\Resource\\DeletedContentType", "doc": "&quot;A DeletedContentType describes a content type that has been deleted.&quot;"},
                    
            {"type": "Class", "fromName": "Contentful\\Delivery\\Resource", "fromLink": "Contentful/Delivery/Resource.html", "link": "Contentful/Delivery/Resource/DeletedEntry.html", "name": "Contentful\\Delivery\\Resource\\DeletedEntry", "doc": "&quot;A DeletedEntry describes an entry that has been deleted.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\DeletedEntry", "fromLink": "Contentful/Delivery/Resource/DeletedEntry.html", "link": "Contentful/Delivery/Resource/DeletedEntry.html#method_getContentType", "name": "Contentful\\Delivery\\Resource\\DeletedEntry::getContentType", "doc": "&quot;This method always returns null when used with the sync API.&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Delivery\\Resource", "fromLink": "Contentful/Delivery/Resource.html", "link": "Contentful/Delivery/Resource/DeletedResource.html", "name": "Contentful\\Delivery\\Resource\\DeletedResource", "doc": "&quot;A DeletedResource encodes metadata about a deleted resource.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\DeletedResource", "fromLink": "Contentful/Delivery/Resource/DeletedResource.html", "link": "Contentful/Delivery/Resource/DeletedResource.html#method_jsonSerialize", "name": "Contentful\\Delivery\\Resource\\DeletedResource::jsonSerialize", "doc": "&quot;{@inheritdoc}&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Delivery\\Resource", "fromLink": "Contentful/Delivery/Resource.html", "link": "Contentful/Delivery/Resource/Entry.html", "name": "Contentful\\Delivery\\Resource\\Entry", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\Entry", "fromLink": "Contentful/Delivery/Resource/Entry.html", "link": "Contentful/Delivery/Resource/Entry.html#method_getSpace", "name": "Contentful\\Delivery\\Resource\\Entry::getSpace", "doc": "&quot;Returns the space this entry belongs to.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\Entry", "fromLink": "Contentful/Delivery/Resource/Entry.html", "link": "Contentful/Delivery/Resource/Entry.html#method_getEnvironment", "name": "Contentful\\Delivery\\Resource\\Entry::getEnvironment", "doc": "&quot;Returns the environment this entry belongs to.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\Entry", "fromLink": "Contentful/Delivery/Resource/Entry.html", "link": "Contentful/Delivery/Resource/Entry.html#method_getContentType", "name": "Contentful\\Delivery\\Resource\\Entry::getContentType", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\Entry", "fromLink": "Contentful/Delivery/Resource/Entry.html", "link": "Contentful/Delivery/Resource/Entry.html#method___call", "name": "Contentful\\Delivery\\Resource\\Entry::__call", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\Entry", "fromLink": "Contentful/Delivery/Resource/Entry.html", "link": "Contentful/Delivery/Resource/Entry.html#method___get", "name": "Contentful\\Delivery\\Resource\\Entry::__get", "doc": "&quot;Shortcut for accessing fields using $entry-&gt;fieldName.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\Entry", "fromLink": "Contentful/Delivery/Resource/Entry.html", "link": "Contentful/Delivery/Resource/Entry.html#method_offsetGet", "name": "Contentful\\Delivery\\Resource\\Entry::offsetGet", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\Entry", "fromLink": "Contentful/Delivery/Resource/Entry.html", "link": "Contentful/Delivery/Resource/Entry.html#method_offsetExists", "name": "Contentful\\Delivery\\Resource\\Entry::offsetExists", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\Entry", "fromLink": "Contentful/Delivery/Resource/Entry.html", "link": "Contentful/Delivery/Resource/Entry.html#method_offsetSet", "name": "Contentful\\Delivery\\Resource\\Entry::offsetSet", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\Entry", "fromLink": "Contentful/Delivery/Resource/Entry.html", "link": "Contentful/Delivery/Resource/Entry.html#method_offsetUnset", "name": "Contentful\\Delivery\\Resource\\Entry::offsetUnset", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\Entry", "fromLink": "Contentful/Delivery/Resource/Entry.html", "link": "Contentful/Delivery/Resource/Entry.html#method_get", "name": "Contentful\\Delivery\\Resource\\Entry::get", "doc": "&quot;Returns a the value of a field using the given locale.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\Entry", "fromLink": "Contentful/Delivery/Resource/Entry.html", "link": "Contentful/Delivery/Resource/Entry.html#method_getReferences", "name": "Contentful\\Delivery\\Resource\\Entry::getReferences", "doc": "&quot;Gets all entries that contain links to the current one.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\Entry", "fromLink": "Contentful/Delivery/Resource/Entry.html", "link": "Contentful/Delivery/Resource/Entry.html#method_jsonSerialize", "name": "Contentful\\Delivery\\Resource\\Entry::jsonSerialize", "doc": "&quot;{@inheritdoc}&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Delivery\\Resource", "fromLink": "Contentful/Delivery/Resource.html", "link": "Contentful/Delivery/Resource/Environment.html", "name": "Contentful\\Delivery\\Resource\\Environment", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\Environment", "fromLink": "Contentful/Delivery/Resource/Environment.html", "link": "Contentful/Delivery/Resource/Environment.html#method_getLocales", "name": "Contentful\\Delivery\\Resource\\Environment::getLocales", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\Environment", "fromLink": "Contentful/Delivery/Resource/Environment.html", "link": "Contentful/Delivery/Resource/Environment.html#method_getLocale", "name": "Contentful\\Delivery\\Resource\\Environment::getLocale", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\Environment", "fromLink": "Contentful/Delivery/Resource/Environment.html", "link": "Contentful/Delivery/Resource/Environment.html#method_getDefaultLocale", "name": "Contentful\\Delivery\\Resource\\Environment::getDefaultLocale", "doc": "&quot;Returns the default locale for this space.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\Environment", "fromLink": "Contentful/Delivery/Resource/Environment.html", "link": "Contentful/Delivery/Resource/Environment.html#method_jsonSerialize", "name": "Contentful\\Delivery\\Resource\\Environment::jsonSerialize", "doc": "&quot;{@inheritdoc}&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Delivery\\Resource", "fromLink": "Contentful/Delivery/Resource.html", "link": "Contentful/Delivery/Resource/Locale.html", "name": "Contentful\\Delivery\\Resource\\Locale", "doc": "&quot;Value object encoding a locale.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\Locale", "fromLink": "Contentful/Delivery/Resource/Locale.html", "link": "Contentful/Delivery/Resource/Locale.html#method_getCode", "name": "Contentful\\Delivery\\Resource\\Locale::getCode", "doc": "&quot;Returns the locale code.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\Locale", "fromLink": "Contentful/Delivery/Resource/Locale.html", "link": "Contentful/Delivery/Resource/Locale.html#method_getName", "name": "Contentful\\Delivery\\Resource\\Locale::getName", "doc": "&quot;Returns the human readable name.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\Locale", "fromLink": "Contentful/Delivery/Resource/Locale.html", "link": "Contentful/Delivery/Resource/Locale.html#method_isDefault", "name": "Contentful\\Delivery\\Resource\\Locale::isDefault", "doc": "&quot;Returns true if this is the default locale for the space.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\Locale", "fromLink": "Contentful/Delivery/Resource/Locale.html", "link": "Contentful/Delivery/Resource/Locale.html#method_getFallbackCode", "name": "Contentful\\Delivery\\Resource\\Locale::getFallbackCode", "doc": "&quot;Returns the code of the locale used for for the fallback.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\Locale", "fromLink": "Contentful/Delivery/Resource/Locale.html", "link": "Contentful/Delivery/Resource/Locale.html#method_jsonSerialize", "name": "Contentful\\Delivery\\Resource\\Locale::jsonSerialize", "doc": "&quot;{@inheritdoc}&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Delivery\\Resource", "fromLink": "Contentful/Delivery/Resource.html", "link": "Contentful/Delivery/Resource/LocalizedResource.html", "name": "Contentful\\Delivery\\Resource\\LocalizedResource", "doc": "&quot;A LocalizedResource can store information for multiple locales.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\LocalizedResource", "fromLink": "Contentful/Delivery/Resource/LocalizedResource.html", "link": "Contentful/Delivery/Resource/LocalizedResource.html#method_initLocales", "name": "Contentful\\Delivery\\Resource\\LocalizedResource::initLocales", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\LocalizedResource", "fromLink": "Contentful/Delivery/Resource/LocalizedResource.html", "link": "Contentful/Delivery/Resource/LocalizedResource.html#method_setLocale", "name": "Contentful\\Delivery\\Resource\\LocalizedResource::setLocale", "doc": "&quot;Set the locale for this instance.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\LocalizedResource", "fromLink": "Contentful/Delivery/Resource/LocalizedResource.html", "link": "Contentful/Delivery/Resource/LocalizedResource.html#method_getLocale", "name": "Contentful\\Delivery\\Resource\\LocalizedResource::getLocale", "doc": "&quot;The locale code for the currently set locale.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\LocalizedResource", "fromLink": "Contentful/Delivery/Resource/LocalizedResource.html", "link": "Contentful/Delivery/Resource/LocalizedResource.html#method_getLocaleFromInput", "name": "Contentful\\Delivery\\Resource\\LocalizedResource::getLocaleFromInput", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\LocalizedResource", "fromLink": "Contentful/Delivery/Resource/LocalizedResource.html", "link": "Contentful/Delivery/Resource/LocalizedResource.html#method_walkFallbackChain", "name": "Contentful\\Delivery\\Resource\\LocalizedResource::walkFallbackChain", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Delivery\\Resource", "fromLink": "Contentful/Delivery/Resource.html", "link": "Contentful/Delivery/Resource/Space.html", "name": "Contentful\\Delivery\\Resource\\Space", "doc": "&quot;The Space class represents a single space identified by its ID and holding some metadata.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\Space", "fromLink": "Contentful/Delivery/Resource/Space.html", "link": "Contentful/Delivery/Resource/Space.html#method_getName", "name": "Contentful\\Delivery\\Resource\\Space::getName", "doc": "&quot;Returns the name of this space.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Resource\\Space", "fromLink": "Contentful/Delivery/Resource/Space.html", "link": "Contentful/Delivery/Resource/Space.html#method_jsonSerialize", "name": "Contentful\\Delivery\\Resource\\Space::jsonSerialize", "doc": "&quot;{@inheritdoc}&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Delivery\\Synchronization", "fromLink": "Contentful/Delivery/Synchronization.html", "link": "Contentful/Delivery/Synchronization/Manager.html", "name": "Contentful\\Delivery\\Synchronization\\Manager", "doc": "&quot;The synchronization Manager can be used to sync a Space to this server.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Delivery\\Synchronization\\Manager", "fromLink": "Contentful/Delivery/Synchronization/Manager.html", "link": "Contentful/Delivery/Synchronization/Manager.html#method___construct", "name": "Contentful\\Delivery\\Synchronization\\Manager::__construct", "doc": "&quot;Manager constructor.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Synchronization\\Manager", "fromLink": "Contentful/Delivery/Synchronization/Manager.html", "link": "Contentful/Delivery/Synchronization/Manager.html#method_sync", "name": "Contentful\\Delivery\\Synchronization\\Manager::sync", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Synchronization\\Manager", "fromLink": "Contentful/Delivery/Synchronization/Manager.html", "link": "Contentful/Delivery/Synchronization/Manager.html#method_startSync", "name": "Contentful\\Delivery\\Synchronization\\Manager::startSync", "doc": "&quot;Starts a new Synchronization.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Synchronization\\Manager", "fromLink": "Contentful/Delivery/Synchronization/Manager.html", "link": "Contentful/Delivery/Synchronization/Manager.html#method_continueSync", "name": "Contentful\\Delivery\\Synchronization\\Manager::continueSync", "doc": "&quot;Continues the synchronization either at the next page,\nor with the results since the initial synchronization.&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Delivery\\Synchronization", "fromLink": "Contentful/Delivery/Synchronization.html", "link": "Contentful/Delivery/Synchronization/Query.html", "name": "Contentful\\Delivery\\Synchronization\\Query", "doc": "&quot;A sync Query can be used to limit what type of resources and events should be synced.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Delivery\\Synchronization\\Query", "fromLink": "Contentful/Delivery/Synchronization/Query.html", "link": "Contentful/Delivery/Synchronization/Query.html#method_getQueryData", "name": "Contentful\\Delivery\\Synchronization\\Query::getQueryData", "doc": "&quot;Returns the parameters to execute this query.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Synchronization\\Query", "fromLink": "Contentful/Delivery/Synchronization/Query.html", "link": "Contentful/Delivery/Synchronization/Query.html#method_getQueryString", "name": "Contentful\\Delivery\\Synchronization\\Query::getQueryString", "doc": "&quot;The urlencoded query string for this query.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Synchronization\\Query", "fromLink": "Contentful/Delivery/Synchronization/Query.html", "link": "Contentful/Delivery/Synchronization/Query.html#method_setType", "name": "Contentful\\Delivery\\Synchronization\\Query::setType", "doc": "&quot;Set the Type of event or resource to sync.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Synchronization\\Query", "fromLink": "Contentful/Delivery/Synchronization/Query.html", "link": "Contentful/Delivery/Synchronization/Query.html#method_setContentType", "name": "Contentful\\Delivery\\Synchronization\\Query::setContentType", "doc": "&quot;Set the content type to which results should be limited. Set to NULL to not filter for a content type.&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Delivery\\Synchronization", "fromLink": "Contentful/Delivery/Synchronization.html", "link": "Contentful/Delivery/Synchronization/Result.html", "name": "Contentful\\Delivery\\Synchronization\\Result", "doc": "&quot;The Result of synchronization.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Delivery\\Synchronization\\Result", "fromLink": "Contentful/Delivery/Synchronization/Result.html", "link": "Contentful/Delivery/Synchronization/Result.html#method___construct", "name": "Contentful\\Delivery\\Synchronization\\Result::__construct", "doc": "&quot;Result constructor.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Synchronization\\Result", "fromLink": "Contentful/Delivery/Synchronization/Result.html", "link": "Contentful/Delivery/Synchronization/Result.html#method_getItems", "name": "Contentful\\Delivery\\Synchronization\\Result::getItems", "doc": "&quot;Returns the items retrieved by this synchronization operation.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Synchronization\\Result", "fromLink": "Contentful/Delivery/Synchronization/Result.html", "link": "Contentful/Delivery/Synchronization/Result.html#method_getToken", "name": "Contentful\\Delivery\\Synchronization\\Result::getToken", "doc": "&quot;Returns the token needed to continue the synchronization.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\Synchronization\\Result", "fromLink": "Contentful/Delivery/Synchronization/Result.html", "link": "Contentful/Delivery/Synchronization/Result.html#method_isDone", "name": "Contentful\\Delivery\\Synchronization\\Result::isDone", "doc": "&quot;Returns true if there are currently no more results in the synchronization.&quot;"},
            
            {"type": "Class", "fromName": "Contentful\\Delivery", "fromLink": "Contentful/Delivery.html", "link": "Contentful/Delivery/SystemProperties.html", "name": "Contentful\\Delivery\\SystemProperties", "doc": "&quot;A SystemProperties instance contains the metadata of a resource.&quot;"},
                                                        {"type": "Method", "fromName": "Contentful\\Delivery\\SystemProperties", "fromLink": "Contentful/Delivery/SystemProperties.html", "link": "Contentful/Delivery/SystemProperties.html#method___construct", "name": "Contentful\\Delivery\\SystemProperties::__construct", "doc": "&quot;SystemProperties constructor.&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\SystemProperties", "fromLink": "Contentful/Delivery/SystemProperties.html", "link": "Contentful/Delivery/SystemProperties.html#method_getId", "name": "Contentful\\Delivery\\SystemProperties::getId", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\SystemProperties", "fromLink": "Contentful/Delivery/SystemProperties.html", "link": "Contentful/Delivery/SystemProperties.html#method_getType", "name": "Contentful\\Delivery\\SystemProperties::getType", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\SystemProperties", "fromLink": "Contentful/Delivery/SystemProperties.html", "link": "Contentful/Delivery/SystemProperties.html#method_getSpace", "name": "Contentful\\Delivery\\SystemProperties::getSpace", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\SystemProperties", "fromLink": "Contentful/Delivery/SystemProperties.html", "link": "Contentful/Delivery/SystemProperties.html#method_getContentType", "name": "Contentful\\Delivery\\SystemProperties::getContentType", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\SystemProperties", "fromLink": "Contentful/Delivery/SystemProperties.html", "link": "Contentful/Delivery/SystemProperties.html#method_getEnvironment", "name": "Contentful\\Delivery\\SystemProperties::getEnvironment", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\SystemProperties", "fromLink": "Contentful/Delivery/SystemProperties.html", "link": "Contentful/Delivery/SystemProperties.html#method_getRevision", "name": "Contentful\\Delivery\\SystemProperties::getRevision", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\SystemProperties", "fromLink": "Contentful/Delivery/SystemProperties.html", "link": "Contentful/Delivery/SystemProperties.html#method_getLocale", "name": "Contentful\\Delivery\\SystemProperties::getLocale", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\SystemProperties", "fromLink": "Contentful/Delivery/SystemProperties.html", "link": "Contentful/Delivery/SystemProperties.html#method_getCreatedAt", "name": "Contentful\\Delivery\\SystemProperties::getCreatedAt", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\SystemProperties", "fromLink": "Contentful/Delivery/SystemProperties.html", "link": "Contentful/Delivery/SystemProperties.html#method_getUpdatedAt", "name": "Contentful\\Delivery\\SystemProperties::getUpdatedAt", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\SystemProperties", "fromLink": "Contentful/Delivery/SystemProperties.html", "link": "Contentful/Delivery/SystemProperties.html#method_getDeletedAt", "name": "Contentful\\Delivery\\SystemProperties::getDeletedAt", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Contentful\\Delivery\\SystemProperties", "fromLink": "Contentful/Delivery/SystemProperties.html", "link": "Contentful/Delivery/SystemProperties.html#method_jsonSerialize", "name": "Contentful\\Delivery\\SystemProperties::jsonSerialize", "doc": "&quot;{@inheritdoc}&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


